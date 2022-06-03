import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
})



