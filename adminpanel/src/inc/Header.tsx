import Logo from "images/logo.jpg";
import { FC } from "react";
import styled from "styled-components";

const Header: FC = () => (
  <header>
    <LogoBox></LogoBox>
  </header>
);

export default Header;

const LogoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: url(${Logo}) no-repeat center center;
  height: 320px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  width: auto;
  max-width: 100%;
  max-height: 100%;

  @media (max-width: 1900px) {
    background-repeat: no-repeat;
    background-size: 100% 50%;
    background-position: center;
    margin: 10 10px 0 10px;
    border: 1px solid black;
  }
`;
