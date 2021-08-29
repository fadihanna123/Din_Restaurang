import { FC } from "react";
import { useRecoilState } from "recoil";
import { listState, loadingState, viewState } from "states";
import { Button, Col, DataTable, MainTable, Row, TableHead } from "styles";
import { Food } from "typings";

import AddComp from "./Add";
import EditComp from "./Edit";
import FoodItem from "./FoodItem";

const FoodTable: FC = () => {
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
                list.length ? (
                  list.map(
                    (
                      { _id, title, sorts, included, price }: Food,
                      i: number
                    ) => {
                      const props = {
                        _id,
                        title,
                        sorts,
                        included,
                        price,
                      };

                      return <FoodItem key={_id} {...props} />;
                    }
                  )
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
