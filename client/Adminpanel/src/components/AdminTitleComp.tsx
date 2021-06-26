import styled from "styled-components";

const AdminTitleComp = () => {
  return (
    <>
      <Admin data-aos="zoom-in">Välkommen till din restaurang</Admin>
    </>
  );
};

export default AdminTitleComp;

const Admin = styled.h1`
  font-size: 30px;
  font-style: italic;
  margin-top: 80px;
  text-align: center;

  @media (max-width: 1900px) {
    margin: 10px;
    text-align: center;
  }
`;
