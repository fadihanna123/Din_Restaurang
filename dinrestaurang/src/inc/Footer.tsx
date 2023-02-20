import { FooterBlock } from 'styles';
import React from 'react';

const Footer: React.FC = () => (
  <FooterBlock
    display='grid'
    gridTemplateColumns='1fr'
    textAlign='center'
    fontSize={21}
    ml={-100}
    bg='#ADD8E6'
    height={200}
    m={10}
    p={30}
  >
    <h2>Din restaurang</h2>
    Telefonnummer:
    <span className='fa fa-phone'>
      <a href='tel:084414563'>08-441 45 63</a>
    </span>
    Adress: <address>Sveavägen 14, Stockholm.</address>
    &copy; Copyright 2023 Din restaurang.
  </FooterBlock>
);

export default Footer;
