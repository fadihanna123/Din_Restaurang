import styled from "styled-components";

const WelcomeComp = () => {
  return (
    <>
      <Welcome data-aos="zoom-in">Välkommen till din restaurang</Welcome>
    </>
  );
};

export default WelcomeComp;

const Welcome = styled.h1`
  font-size: 35px;
  font-style: italic;
  margin-left: 700px;
  margin-top: 80px;

  @media (max-width: 1900px) {
    margin: 10px;
    text-align: center;
  }
`;
