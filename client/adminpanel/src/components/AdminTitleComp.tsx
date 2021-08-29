import { FC, useEffect } from "react";
import sal from "sal.js";
import styled from "styled-components";

const AdminTitleComp: FC = () => {
  useEffect(() => {
    sal();
  }, []);

  return <Admin data-sal="zoom-in">Välkommen till din restaurang</Admin>;
};

export default AdminTitleComp;

const Admin = styled.h1`
  font-size: 30px;
  font-style: italic;
  margin-top: 80px;
  text-align: center;

  @media (max-width: 1900px) {
    margin: 10px;
    text-align: center;
  }
`;
