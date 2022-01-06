import { getData } from 'functions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setView } from 'redux/actions';
import { Button, Col, DataTable, MainTable, Row, TableHead } from 'styles/global';
import { debounce } from 'ts-debounce';
import { ListReducerTypes, LoadingReducerTypes, ViewReducerTypes } from 'typings';

import AddComp from './Add';
import EditComp from './Edit';
import FoodItem from './FoodItem';

const FoodTable: React.FC = () => {
  const loading = useSelector(
    (state: LoadingReducerTypes) => state.loadingReducer
  );
  const list = useSelector((state: ListReducerTypes) => state.listReducer);
  const view = useSelector((state: ViewReducerTypes) => state.viewReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    debounce(getData(dispatch) as any, 1500);
  }, [dispatch]);

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
                  list.map((item) => <FoodItem key={item._id} item={item} />)
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
            onClick={() => dispatch(setView("Add"))}
          >
            Lägg till
          </Button>
          <section>{view === "Add" && <AddComp />}</section>
          <section>{view === "Edit" && <EditComp />}</section>
        </MainTable>
      </Col>
    </Row>
  );
};

export default FoodTable;
