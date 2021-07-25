import styled from "styled-components";

const WelcomeComp = () => {
  return <Welcome data-sal="zoom-in">Välkommen till din restaurang</Welcome>;
};

export default WelcomeComp;

const Welcome = styled.h1`
  font-style: italic;
  margin-left: 700px;
  margin-top: 80px;

  @media (max-width: 1900px) {
    margin: 10px;
    text-align: center;
  }
`;
