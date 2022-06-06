import styled from "styled-components";
import "./Error.css";
import { Link } from "react-router-dom";
import { HomeButton } from "../Home/HomeComponents";

const Error = () => {
  return (
    <>
      <ErrorContainer>
        <RedContainer className="red-container">
          <ErrorImg
            src="https://www.pngplay.com/wp-content/uploads/12/Sad-Emoji-No-Background.png"
            alt="carita triste"
            className="sad-face"
          />
          <ErrorMsg className="msg-container">
            <h1>404 Error</h1>
            <h4>¡Ups! Hemos perdido esta página</h4>
            <p>
              Hemos buscado por todos lados, pero no hemos conseguido encontrar
              la página que estás buscando. Vamos a buscar un lugar mejor para
              vos.
            </p>
          </ErrorMsg>
        </RedContainer>
        <Link data-testid="inicio" style={{ textDecoration: "none" }} to="/">
          <HomeButton className="btn-index">Volver al Inicio</HomeButton>
        </Link>
      </ErrorContainer>
    </>
  );
};

export default Error;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RedContainer = styled.div`
  display: flex;
  height: auto;
  width: 70%;
  position: relative;
  align-items: center;
  gap: 20px;
  background-color: rgb(192, 74, 80);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 50px;
  min-height: 330px;
  margin: 80px 15% 20px 15%;
`;
export const ErrorMsg = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--blanco);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 20px;
  min-height: 200px;
  width: 100%;
  height: fit-content;
  font-size: 18px;
`;
export const ErrorImg = styled.img`
  width: 200px;
  height: 200px;
`;
