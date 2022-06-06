import { render, screen } from "@testing-library/react";
import Error from "./Error";
import { BrowserRouter } from "react-router-dom";

describe("pruebas en el componente <Error />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
  });

  test("se renderiza el botón para volver al inicio", () => {
    const btnVolver = screen.getByText(/volver al inicio/i);
    expect(btnVolver).toBeInTheDocument();
  });

  test("el boton de volver redirige correctamente", () => {
    const btnVolver = screen.getByTestId("inicio");
    expect(btnVolver).toBeInTheDocument();
    expect(btnVolver).toHaveAttribute("href", "/");
  });
});
