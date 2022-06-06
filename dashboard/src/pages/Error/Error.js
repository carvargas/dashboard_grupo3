import "./Error.css";
import { Link } from "react-router-dom";
import { HomeButton } from "../Home/HomeComponents";

const Error = () => {
  return (
    <div className="error-container">
      <div className="red-container">
        <img
          src="https://www.pngplay.com/wp-content/uploads/12/Sad-Emoji-No-Background.png"
          alt="carita triste"
          className="sad-face"
        />
        <div className="msg-container">
          <h1>404 Error</h1>
          <h4>¡Ups! Hemos perdido esta página</h4>
          <p>
            Hemos buscado por todos lados, pero no hemos conseguido encontrar la
            página que estás buscando. Vamos a buscar un lugar mejor para vos.
          </p>
        </div>
      </div>
      <Link style={{ textDecoration: "none" }} to="/">
        <HomeButton className="btn-index">Volver al Inicio</HomeButton>
      </Link>
    </div>
  );
};

export default Error;
