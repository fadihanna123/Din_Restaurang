import { FooterBlock } from '@styles/footerStyles';
import React from 'react';

const Footer: React.FC = () => (
  <FooterBlock>
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
