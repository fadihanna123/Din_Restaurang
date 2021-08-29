import styled from "@emotion/styled";
import { FC } from "react";
import { color, grid, layout, space, typography } from "styled-system";

const Footer: FC = () => (
  <FooterBlock
    display="grid"
    gridTemplateColumns="1fr"
    textAlign="center"
    fontSize={21}
    ml={-100}
    bg="#ADD8E6"
    height={200}
    m={10}
    p={10}
  >
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

const FooterBlock = styled("footer")(
  layout,
  space,
  layout,
  color,
  grid,
  typography
);
