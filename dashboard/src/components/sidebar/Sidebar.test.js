import { screen, render } from "@testing-library/react";
// dependecias
import { BrowserRouter } from "react-router-dom";
import AppContext from '../../contexts/AppContext';
//componentes 
import Sidebar from './Sidebar';


describe('Pruebas en el componente <Sidebar />', ()=>{

    beforeEach(()=>{

        render(
            <BrowserRouter>
                <AppContext>
                    <Sidebar />
                </AppContext>
            </BrowserRouter>
        )
    })

    test('Se renderizan los li', ()=>{
        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(3);
    })

    test('Boton de inicio contiene el texto inicio y redirige correctamente', () =>{
        const inicio = screen.getByText(/inicio/i, {selector: 'a'});

        expect(inicio).toBeInTheDocument();
        expect(inicio).toHaveAttribute('href', '/');
        
    })

    test('Boton de productos contiene el texto productos y redirige correctamente', () =>{
        const productos = screen.getByText('Productos', {selector: 'a'});

        expect(productos).toBeInTheDocument();
        expect(productos).toHaveAttribute('href', '/products');
        
    })

    test('Boton de reiniciar productos contiene el texto reiniciar productos y redirige correctamente', () =>{
        const reinicio = screen.getByText('Reiniciar Productos', {selector: 'a'});

        expect(reinicio).toBeInTheDocument();
        expect(reinicio).toHaveAttribute('href', '/');
        
        
    })

})



