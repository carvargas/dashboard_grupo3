//testing
import {screen, render, getByText} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
//dependencias
import { BrowserRouter } from "react-router-dom";
import AppContext from '../../../../contexts/AppContext';
//componentes
import ProductViewInfo from './ProductViewInfo';


describe('Pruebas en el componente <ProductViewInfo />', ()=>{

    let values = {
        _id:"2",
        category:"Alimentos",
        nombre:"Alfajores 70% Cacao Puro x 9 uds",
        description:"Alfajores rellenos con dulce de leche con cobertura de chocolate 70% Cacao Puro x 9 unidades",
        src:"https://tienda.havanna.com.ar/wp-content/uploads/2020/10/alfajor70caco.jpg",
        alt:"foto Alfajores Cacao",
        puntos:15250,
        gallery:["https://tienda.havanna.com.ar/wp-content/uploads/2020/10/alfajor70caco.jpg"],
        mostwanted:false,
        suggested:false,
        stock:1,
        store:"http://localhost:3030/images/profile_pic.svg",
        __v:0
    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        values[name] = value;
    }

    beforeEach(()=>{

        render(
            <BrowserRouter>
                <AppContext>
                    <ProductViewInfo product={{values, handleChange}}/>
                </AppContext>
            </BrowserRouter>
        )
    });

    describe('Se renderiza el componente con un titulo y un form', () => { 

        test('Se renderiza el titulo', ()=>{
            const titulo = screen.getByRole("heading", {level: 3});
            expect(titulo).toBeInTheDocument();
            expect(titulo).toHaveTextContent("Información");
        });

        test('Se renderiza el form', () => { 
            const form  = screen.getByRole("form");
            expect(form).toBeInTheDocument();
        });

    });

    describe('Se renderizan los input del form', () => { 
        
        test('Se renderiza el input nombre con el valor inicial', ()=>{
            const input = screen.getByLabelText("Nombre", {selector: "input"});
            expect(input).toBeInTheDocument();
            expect(input).toHaveValue(values.nombre);
        });

        test('Se renderiza el input puntos con el valor inicial', ()=>{
            const input = screen.getByLabelText("Valor", {selector: "input"});
            expect(input).toBeInTheDocument();

            let value = parseInt(input.value);
            expect(value).toBe(values.puntos);
        });

        test('Se renderiza el input stock con el valor inicial', () => { 
            const input = screen.getByLabelText("Stock", {selector: "input"});
            expect(input).toBeInTheDocument();

            let value = parseInt(input.value);
            expect(value).toBe(values.stock);
        });

        test('Se renderiza el input description con el valor inicial', () => {
            const input = screen.getByLabelText("Descripcion", {selector: "textarea"});
            expect(input).toBeInTheDocument();

            expect(input).toHaveValue(values.description);
        });

        test('Se renderiza el select tienda con dos options, pero uno esta oculto', () => {
            const select = screen.getByLabelText("Tienda", {selector: "select"});
            expect(select).toBeInTheDocument();

            const optionSelecciona = getByText(select, '--selecciona--');
            expect(optionSelecciona).toBeInTheDocument();
            expect(optionSelecciona).toHaveAttribute('hidden');

            const optionOlivia = getByText(select, 'Olivia');
            expect(optionOlivia).toBeInTheDocument();
            expect(optionOlivia).not.toHaveAttribute('hidden');
            expect(optionOlivia).toHaveAttribute('value', 'olivia');
        });

    });

    describe('Cuando el usuario cambia el valor de los inputs, se cambia el valor de values', () => { 
        
        test('Se cambia el valor del input nombre', () => { 
            const input = screen.getByLabelText("Nombre", {selector: "input"});
            
            userEvent.clear(input);
            userEvent.type(input, "NUEVO NOMBRE");
            expect(input).toHaveValue("NUEVO NOMBRE");
        });

        test('Se cambia el valor del input puntos', () => {
            const input = screen.getByLabelText("Valor", {selector: "input"});

            userEvent.clear(input);
            userEvent.type(input, "999");
            expect(input).toHaveValue("999");
        });

        test('Se cambia el valor del input stock al hacer click en el boton -', () => {
            const input = screen.getByLabelText("Stock", {selector: "input"});
            const button = screen.getAllByRole("button");
            
            const oldInputValue = parseInt(input.value);
            userEvent.click(button[0]);
            const newInputValue = parseInt(input.value);
            if(oldInputValue > 0){
                expect(newInputValue).toBe(oldInputValue - 1);
            }else{
                expect(newInputValue).toBe(0);
            }
        });

        test('Se cambia el valor del input stock al hacer click en el boton +', () => {
            const input = screen.getByLabelText("Stock", {selector: "input"});
            const button = screen.getAllByRole("button");
            
            const oldInputValue = parseInt(input.value);
            userEvent.click(button[1]);
            const newInputValue = parseInt(input.value);
            
            expect(newInputValue).toBe(oldInputValue + 1);
        });

        test('Se cambia el valor del input description', () => {
            const input = screen.getByLabelText("Descripcion", {selector: "textarea"});

            userEvent.clear(input);
            userEvent.type(input, "NUEVA DESCRIPCION");
            expect(input).toHaveValue("NUEVA DESCRIPCION");
        });

    });

})



