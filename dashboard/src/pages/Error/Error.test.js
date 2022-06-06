import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("los botones redirigen correctamente", () => {
    const btnVolver = screen.getByTestId("inicio", { selector: "a" });
    expect(btnVolver).toBeInTheDocument();
    expect(btnVolver).toHaveAttribute("href", "/");
  });
});
