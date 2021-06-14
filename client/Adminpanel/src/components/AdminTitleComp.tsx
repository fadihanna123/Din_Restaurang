import styled from "styled-components";

const AdminTitleComp = () => {
  return (
    <>
      <Admin>Välkommen till din restaurang</Admin>
    </>
  );
};

export default AdminTitleComp;

const Admin = styled.h1`
  font-size: 30px;
  font-style: italic;
  margin-left: 800px;
  margin-top: 80px;

  @media (max-width: 1900px) {
    margin: 10px;
    text-align: center;
  }
`;
