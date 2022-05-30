import "../pages/Home/Home.css";
import { Routes, Route } from "react-router-dom";
import { HomeSaludo } from "../pages/Home/HomeComponents";

const HeaderRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeSaludo user="Olivia" />} />
      <Route path="/products" element={<h1>Probando Header Products</h1>} />
      <Route
        path="/products/:id"
        element={<h1>Probando Header Detalle Producto</h1>}
      />
      <Route
        path="/products/new"
        element={<h1>Probando Header Agregar Producto</h1>}
      />
      <Route path="/*" element={<HomeSaludo user="Olivia" />} />
    </Routes>
  );
};

export default HeaderRoute;
