import styled from "styled-components";

export const HomeSaludo = ({ user }) => {
  return <p className="homeHeader">¡Hola {user}!</p>;
};

export const HomeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2c2c2c;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: auto;
  height: 90px;
  border-radius: 16px;
  margin: 20px 10px;
  padding: 0 10px;

  section {
    display: flex;
    justify-content: center;
  }
  p {
    width: 150px;
    font-size: 22px;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 260px;
  }
`;

export const HomeButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: 38px;
  margin-left: 10px;
  background: var(--grisOscuro);
  border-radius: 16px;
  color: rgb(94%, 94%, 94%);
  padding: 0 20px;
  font-size: 12px;
  border-style: inherit;
  cursor: pointer;
  transition: all 300ms ease;
`;
