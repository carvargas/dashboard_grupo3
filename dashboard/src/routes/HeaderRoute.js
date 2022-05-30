import "../pages/Home/Home.css";
import { Routes, Route } from "react-router-dom";
import { HomeSaludo } from "../pages/Home/HomeComponents";
import ProductListHeader from "../pages/Products/ProductList/components/ProductListHeader";
import ProductViewHeader from "../pages/Products/ProductView/components/ProductViewHeader";

const HeaderRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeSaludo />} />
      <Route path="/products" element={<ProductListHeader />} />
      <Route path="/products/:id" element={<ProductViewHeader />} />
      <Route
        path="/products/new"
        element={<ProductViewHeader />}
      />
      <Route path="/*" element={<HomeSaludo />} />
    </Routes>
  );
};

export default HeaderRoute;
