import { render, screen, fireEvent } from "@testing-library/react";
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

  test("se hace el hover correctamente sobre el boton", () => {
    const btnVolver = screen.getByText(/volver/i);
    const style = window.getComputedStyle(btnVolver);
    expect(style.background).toBe("rgb(73, 79, 81)");

    userEvent.hover(btnVolver);

    expect(btnVolver).toHaveStyle("background: rgb(12, 176, 147)");
    // expect(style.background).not.toBe("rgb(73, 79, 81)");
  });
});
