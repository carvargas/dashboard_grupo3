import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import userEvent from "@testing-library/user-event";

describe("testeando el home", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  test("probando si existen los botones de <Home/> con los nombres correctos ", () => {
    const btnAgregarTienda = screen.getByText(/agregar tienda/i);
    const btnAgregarProducto = screen.getByText(/agregar producto/i);
    const btnVerListado = screen.getAllByText(/ver listado/i);
    expect(btnAgregarTienda).toBeInTheDocument();
    expect(btnVerListado.length).toBe(2);
    expect(btnAgregarProducto).toBeInTheDocument();
  });
});
