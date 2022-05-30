import "../pages/Home/Home.css";
import { Routes, Route } from "react-router-dom";
import { HomeSaludo } from "../pages/Home/HomeComponents";
import ProductListHeader from "../pages/Products/ProductList/components/ProductListHeader";
import ProductViewHeader from "../pages/Products/ProductView/components/ProductViewHeader";

const HeaderRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeSaludo user="Olivia" />} />
      <Route path="/products" element={<ProductListHeader />} />
      <Route path="/products/:id" element={<ProductViewHeader />} />
      <Route
        path="/products/new"
        element={<h1>Probando Header Agregar Producto</h1>}
      />
      <Route path="/*" element={<HomeSaludo user="Olivia" />} />
    </Routes>
  );
};

export default HeaderRoute;
