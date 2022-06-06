//testing
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//dependencias
import { BrowserRouter } from "react-router-dom";
//componentes
import Home from "./Home";

describe("testeando el home", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  test("probando si se renderizan los botones de <Home/> con los nombres correctos ", () => {
    const btnAgregarTienda = screen.getByText(/agregar tienda/i);
    const btnAgregarProducto = screen.getByText(/agregar producto/i);
    const btnVerListado = screen.getAllByText(/ver listado/i);
    expect(btnAgregarTienda).toBeInTheDocument();
    expect(btnVerListado.length).toBe(2);
    expect(btnAgregarProducto).toBeInTheDocument();
  });

  test("probando si los botones redirigen correctamente", () => {
    const listadoProductos = screen.getByTestId("listado-productos");
    const listadoTiendas = screen.getByTestId("listado-tiendas");
    const agregarProducto = screen.getByTestId("agregar-producto");
    const agregarTienda = screen.getByTestId("agregar-tienda");
    expect(listadoProductos).toHaveAttribute("href", "/products");
    expect(listadoTiendas).toHaveAttribute("href", "/stores");
    expect(agregarProducto).toHaveAttribute("href", "/products/new");
    expect(agregarTienda).toHaveAttribute("href", "/stores/new");
  });
});
