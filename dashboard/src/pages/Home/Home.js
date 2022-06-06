// import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeItem, HomeButton } from "./HomeComponents";
import "./Home.css";
import useProductListFetch from "../../hooks/useProductListFetch";

const Home = () => {
  const [products] = useProductListFetch();

  return (
    <div className="home-container">
      <HomeItem>
        <section>
          <i className="fa-solid fa-box"></i>
          <p>
            <b>{products ? products.length : "..."}</b> Productos
          </p>
        </section>
        <div>
          <Link
            data-testid="listado-productos"
            style={{ textDecoration: "none" }}
            to="/products"
          >
            <HomeButton className="homeButton">Ver Listado</HomeButton>
          </Link>
          <Link
            data-testid="agregar-producto"
            style={{ textDecoration: "none" }}
            to="/products/new"
          >
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
          <Link
            data-testid="listado-tiendas"
            style={{ textDecoration: "none" }}
            to="/stores"
          >
            <HomeButton className="homeButton">Ver Listado</HomeButton>
          </Link>
          <Link
            data-testid="agregar-tienda"
            style={{ textDecoration: "none" }}
            to="/stores/new"
          >
            <HomeButton className="homeButtonAdd">Agregar Tienda</HomeButton>
          </Link>
        </div>
      </HomeItem>
    </div>
  );
};

export default Home;
