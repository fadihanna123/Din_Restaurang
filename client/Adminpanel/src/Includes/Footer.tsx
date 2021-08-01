import styled from "styled-components";

const Footer = () => (
  <FooterBlock>
    <h3>Din restaurang</h3>
    Telefonnummer:
    <span className="fa fa-phone">
      <a href="tel:084414563">08-441 45 63</a>
    </span>
    Adress: <address>Sveavägen 14, Stockholm.</address>
    &copy; Copyright 2020 Din restaurang.
  </FooterBlock>
);

export default Footer;

const FooterBlock = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  font-size: 21px;
  margin-left: -100px;
  background-color: lightblue;
  height: 200px;
  margin: 10px;
  padding: 10px;
`;
