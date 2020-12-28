import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";
import AddComp from "./Add";
import EditComp from "./Edit";
import axios from "axios";

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("");
  const [getid, setId] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        url: "http://localhost:5000/food",
        headers: { "Content-Type": "application/json" },
      });
      setList(data);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };

  const DeleteItem = async (id) => {
    try {
      setLoading(true);
      await axios({
        url: "http://localhost:5000/food/" + id,
        method: "DELETE",
      });
      const temp = [...list].filter((item) => item._id !== id);
      setList(temp);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Admin>Välkommen till din restaurang</Admin>
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
                      list.map((item, i) => (
                        <tr key={i}>
                          <td>{item.title}</td>
                          <td>{item.sorts}</td>
                          <td>{item.price} kr </td>
                          <td>{item.included}</td>
                          <td>
                            <Button
                              onClick={() => {
                                setView("Edit");
                                setId(item._id);
                              }}
                            >
                              Ändra
                            </Button>
                            <Button
                              onClick={() => {
                                DeleteItem(item._id);
                              }}
                            >
                              Radera
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7}>
                          Inga data. Var vänlig lägg till data!
                        </td>
                      </tr>
                    )
                  ) : (
                    <tr colSpan={7}>
                      <td>Laddar...</td>
                    </tr>
                  )}
                </tbody>
              </DataTable>
              <Button className="spec" onClick={() => setView("Add")}>
                Lägg till
              </Button>
              <div>
                {view === "Add" ? (
                  <AddComp list={list} setList={setList} />
                ) : (
                  ""
                )}
                {view === "Edit" ? (
                  <EditComp
                    setView={setView}
                    list={list}
                    setList={setList}
                    getid={getid}
                  />
                ) : (
                  ""
                )}
              </div>
            </MainTable>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  font-family: Cambria, Georgia;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 1900px) {
    width: 100%;
    margin: 0;
    font-size: 16px;
  }
`;

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

const Admin = styled.h1`
  font-size: 30px;
  font-style: italic;
  margin-left: 800px;
  margin-top: 80px;

  @media (max-width: 1900px) {
    margin: 10px;
    text-align: center;
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
