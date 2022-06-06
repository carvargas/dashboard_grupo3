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

  test("probando que se hace hover en los botones", () => {
    const btnAgregarTienda = screen.getByText(/agregar producto/i);
    expect(btnAgregarTienda).toHaveStyle(`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    height: 38px;
    margin-left: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: var(--grisOscuro);
    border-radius: 16px;
    color: rgb(94%, 94%, 94%);
    padding: 0 20px;
    font-size: 12px;
    border-style: inherit;
    cursor: pointer;
    transition: all 300ms ease;
  `);
    // userEvent.focus(btnVerListado)
  });
});
