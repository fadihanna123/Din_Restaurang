import styled from 'styled-components';

export const Container = styled.div`
  font-family: Cambria, Georgia;
  overflow: hidden;
  margin: 0 auto;
  background-color: ${(props) => (props.theme === 'dark' ? '#111' : '#fff')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#111')};

  @media (max-width: 1900px) {
    width: 100%;
    margin: 0;
    font-size: 16px;
  }
`;

export const ToggleThemeBtn = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1rem;
  padding: 0.5rem;
  z-index: 50;
  border: 2px solid black;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;
