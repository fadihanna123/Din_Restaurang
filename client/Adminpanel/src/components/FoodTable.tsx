import { useRecoilState } from "recoil";
import { listState, loadingState, viewState } from "States";
import { Button, Col, DataTable, MainTable, Row, TableHead } from "styles";
import { Food } from "typings";

import AddComp from "./Add";
import EditComp from "./Edit";
import FoodItem from "./FoodItem";

const FoodTable = () => {
  const [loading] = useRecoilState(loadingState);
  const [list] = useRecoilState(listState);
  const [view, setView] = useRecoilState(viewState);

  return (
    <Row data-sal="zoom-in">
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
                    <FoodItem item={item} i={i} />
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
            data-sal="flip-left"
            onClick={() => setView && setView("Add")}
          >
            Lägg till
          </Button>
          <section>
            {view === "Add" ? <AddComp /> : ""}
            {view === "Edit" ? <EditComp /> : ""}
          </section>
        </MainTable>
      </Col>
    </Row>
  );
};

export default FoodTable;
