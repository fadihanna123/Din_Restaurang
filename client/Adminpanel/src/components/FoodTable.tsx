import axios from "axios";
import { useRecoilState } from "recoil";
import { getIdState, listState, loadingState, viewState } from "States";
import { Button, Col, DataTable, MainTable, Row, TableHead } from "styles";
import { Food } from "typings";

import AddComp from "./Add";
import EditComp from "./Edit";

const FoodTable = () => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [list, setList] = useRecoilState(listState);
  const [, setId] = useRecoilState(getIdState);
  const [view, setView] = useRecoilState(viewState);

  const DeleteItem = async (id: string): Promise<void> => {
    try {
      setLoading(true);

      await axios.delete<Food>(`http://localhost:5000/food/${id}`);
      const temp = [...list].filter((item) => item._id !== id);
      setList(temp);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading && setLoading(false);
    }
  };

  return (
    <Row data-aos="zoom-in">
      <br />
      <Col>
        <div id="data"></div>
        <MainTable>
          <DataTable>
            <TableHead>
              <tr>
                <th>Title:</th>
                <th>Sorts:</th>
                <th>Pris:</th>
                <th>Ingår:</th>
                <th>Åtgärder:</th>
              </tr>
            </TableHead>
            <tbody>
              {!loading ? (
                list.length > 0 ? (
                  list.map((item: Food, i: number) => (
                    <tr key={i}>
                      <td>{item.title}</td>
                      <td>{item.sorts}</td>
                      <td>{item.price} kr </td>
                      <td>{item.included}</td>
                      <td>
                        <Button
                          onClick={() => {
                            setView && setView("Edit");
                            setId && setId(item._id);
                          }}
                        >
                          Ändra
                        </Button>
                        <Button onClick={() => DeleteItem(item._id)}>
                          Radera
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7}>Inga data. Var vänlig lägg till data!</td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan={7}>Laddar...</td>
                </tr>
              )}
            </tbody>
          </DataTable>
          <Button
            className="spec"
            data-aos="flip-left"
            onClick={() => setView && setView("Add")}
          >
            Lägg till
          </Button>
          <div>
            {view === "Add" ? <AddComp /> : ""}
            {view === "Edit" ? <EditComp /> : ""}
          </div>
        </MainTable>
      </Col>
    </Row>
  );
};

export default FoodTable;
