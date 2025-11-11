import styled from 'styled-components';
import Logo from '/assets/logo.jpg';

export const LogoBox = styled.div`
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
    border: 1px solid ${(props) => (props.theme === 'dark' ? '#fff' : '#111')};
  }
`;
