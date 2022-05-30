// import { useState } from "react";
import { Link } from "react-router-dom";
import packageBox from "../../assets/img/package-variant-closed.svg";
import stores from "../../assets/img/store.svg";
import { HomeItem, HomeButton } from "./HomeComponents";
// import { Modal } from "../../components/Modal";
import "./Home.css";
// import { Modal } from "../../components/Modal";

const Home = () => {
  // let cerrar = document.querySelector(".close");
  // let modalContainerL = document.querySelector(".modal_container_l");
  // cerrar.addEventListener("onClick", () => {
  //   modalContainerL.style.opacity = "0";
  //   modalContainerL.style.visibility = "hidden";
  // });

  return (
    <div className="home-container">
      <HomeItem>
        <section>
        <img src={packageBox} alt="box" />
          <p>
            <b>123</b> Productos
          </p>
        </section>
        <div>
          <Link style={{ textDecoration: 'none' }} to="/products">
            <HomeButton className="homeButton">Ver Listado</HomeButton>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/products/new">
          <HomeButton className="homeButtonAdd">Agregar Producto</HomeButton>
          </Link>
        </div>
      </HomeItem>
      <HomeItem>
        <section>
        <img src={stores} alt="stores" />
          <p>
            <b>10</b> Tiendas
          </p>
        </section>
        <div>
          <Link style={{ textDecoration: 'none' }} to="/stores">
          <HomeButton className="homeButton">
            Ver Listado
          </HomeButton>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/stores/new">
          <HomeButton className="homeButtonAdd">
            Agregar Tienda
          </HomeButton>
          </Link>
          {/* <Modal/> */}
        </div>
      </HomeItem>
    </div>
  );
};

export default Home;
