import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

import AddComp from "./Add";
import EditComp from "./Edit";
import { Food, Props } from "../typings/List";

const FoodTable = ({
  loading,
  list,
  setList,
  view,
  setView,
  getId,
  setId,
  setLoading,
}: Props) => {
  const DeleteItem = async (id: string): Promise<void> => {
    try {
      setLoading && setLoading(true);
      await axios({
        url: "http://localhost:5000/food/" + id,
        method: "DELETE",
      });
      const temp = [...list].filter((item) => item._id !== id);
      setList(temp);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading && setLoading(false);
    }
  };

  return (
    <>
      <Row>
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
            <Button className="spec" onClick={() => setView && setView("Add")}>
              Lägg till
            </Button>
            <div>
              {view === "Add" ? <AddComp list={list} setList={setList} /> : ""}
              {view === "Edit" ? (
                <EditComp
                  setView={setView}
                  list={list}
                  setList={setList}
                  getId={getId}
                />
              ) : (
                ""
              )}
            </div>
          </MainTable>
        </Col>
      </Row>
    </>
  );
};

FoodTable.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  getId: PropTypes.string,
  setId: PropTypes.func.isRequired,
};

FoodTable.defaultProps = {
  setLoading: false,
  setList: [],
  list: [],
  loading: false,
  view: "",
  setView: "",
  getId: "",
  setId: "",
};

export default FoodTable;

const Row = styled.div`
  margin: 0 10px 0 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 1900px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  float: left;
  width: 100%;
  background: #dadada;

  @media (max-width: 1900px) {
    width: 100%;
  }
`;

const MainTable = styled.div`
  padding: 10px;
  font-size: 16px;
  text-align: center;
  margin-top: 80px;

  a {
    text-decoration: none;
    padding: 10px;
  }

  @media (max-width: 1900px) {
    a {
      display: flex;
      flex-direction: column;
    }
  }
`;

const DataTable = styled.table`
  padding: 10px;
  width: 100%;

  td {
    padding: 5px;
    width: 700px;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
`;

const TableHead = styled.thead`
  background-color: black;
  color: white;
`;
