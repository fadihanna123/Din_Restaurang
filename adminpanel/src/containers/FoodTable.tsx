import React, { useEffect } from 'react';

// Components
import { getData } from '@functions/apiStore';
import {
  Button,
  Col,
  DataTable,
  MainTable,
  Row,
  TableHead,
} from '@styles/global';
import AddComp from './Add';
import EditComp from './Edit';
import FoodItem from './FoodItem';
import useReduxConsts from '@hooks/useReduxConsts';
import { setView } from '@redux/reducers';

const FoodTable: React.FC = () => {
  const { darkMode, loading, error, view, list, dispatch } = useReduxConsts();

  useEffect(() => {
    let mounted = true;
    getData(dispatch, mounted);
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Row data-sal='zoom-in'>
      <br />
      <Col>
        <div id='data'></div>
        <MainTable theme={darkMode ? 'dark' : 'light'}>
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
                  list.map((item: Food) => (
                    <FoodItem key={item.id} item={item} />
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
