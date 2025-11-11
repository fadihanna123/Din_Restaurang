import useReduxConsts from '@core/hooks/useReduxConsts';
import { LogoBox } from '@styles/headerStyles';
import React from 'react';

const Header: React.FC = () => {
  const { darkMode } = useReduxConsts();

  return (
    <header>
      <LogoBox theme={darkMode ? 'dark' : 'light'}></LogoBox>
    </header>
  );
};

export default Header;
