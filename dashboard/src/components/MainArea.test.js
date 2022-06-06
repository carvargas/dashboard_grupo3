import { screen, render } from "@testing-library/react";
// dependecias
import { BrowserRouter } from "react-router-dom";
import AppContext from "../contexts/AppContext";


//componentes 
import MainArea from "./MainArea";


describe('Pruebas en el componente <MainArea />', ()=>{

    beforeEach(()=>{

        render(
            <BrowserRouter>
                <AppContext>
                    <MainArea />
                </AppContext>
            </BrowserRouter>
        )
    })

    test('El boton de menu se renderiza', ()=>{
        const boton = screen.getByTestId('menu')
        expect(boton).toBeInTheDocument()
    })

})