import React, { useEffect } from 'react';
import { getData } from 'functions';
import { useAppDispatch, useAppSelector } from 'redux/app/hooks';
import { getList, getLoading, getView, setView } from 'redux/reducers';
import { getError } from 'redux/reducers/error';
import {
  Button,
  Col,
  DataTable,
  MainTable,
  Row,
  TableHead,
} from 'styles/global';

import AddComp from './Add';
import EditComp from './Edit';
import FoodItem from './FoodItem';

const FoodTable: React.FC = () => {
  const loading = useAppSelector(getLoading);
  const list = useAppSelector(getList);
  const view = useAppSelector(getView);
  const error = useAppSelector(getError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getData(dispatch);
  }, []);

  return (
    <Row data-sal='zoom-in'>
      <br />
      <Col>
        <div id='data'></div>
        <MainTable>
          <DataTable>
            <TableHead>
              <tr>
                <th>Title: </th>
                <th>Sorts: </th>
                <th>Pris: </th>
                <th>Ingår: </th>
                <th>Åtgärder: </th>
              </tr>
            </TableHead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan={7}>
                    Det finns server fel. Var vänlig kom senare.{' '}
                  </td>
                </tr>
              ) : !loading ? (
                list.length ? (
                  list.map((item) => <FoodItem key={item.id} item={item} />)
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
          {!error && (
            <Button
              className='spec'
              data-sal='flip-left'
              onClick={() => dispatch(setView('Add'))}
            >
              Lägg till
            </Button>
          )}
          <section>{view === 'Add' && <AddComp />}</section>
          <section>{view === 'Edit' && <EditComp />}</section>
        </MainTable>
      </Col>
    </Row>
  );
};

export default FoodTable;
