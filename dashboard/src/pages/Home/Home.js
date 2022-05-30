// import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeItem, HomeButton } from "./HomeComponents";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <HomeItem>
        <section>
          <i className="fa-solid fa-box"></i>
          <p>
            <b>123</b> Productos
          </p>
        </section>
        <div>
          <Link style={{ textDecoration: "none" }} to="/products">
            <HomeButton className="homeButton">Ver Listado</HomeButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/products/new">
            <HomeButton className="homeButtonAdd">Agregar Producto</HomeButton>
          </Link>
        </div>
      </HomeItem>
      <HomeItem>
        <section>
          <i className="fa-solid fa-shop"></i>
          <p>
            <b>10</b> Tiendas
          </p>
        </section>
        <div>
          <Link style={{ textDecoration: "none" }} to="/stores">
            <HomeButton className="homeButton">Ver Listado</HomeButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/stores/new">
            <HomeButton className="homeButtonAdd">Agregar Tienda</HomeButton>
          </Link>
          {/* <Modal/> */}
        </div>
      </HomeItem>
    </div>
  );
};

export default Home;
