//testing
import {screen, render, getByText} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
//dependencias
import { BrowserRouter } from "react-router-dom";
//componentes
import ProductViewInfo from './ProductViewInfo';
//mocks
import { useContext } from 'react';
jest.mock('react', () => {
    const originalModule = jest.requireActual('react')
    
    return {
      __esModule: true,
      ...originalModule,
      useContext: jest.fn()
    }
});


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

describe('Testeando <ProductViewInfo />', ()=>{


    beforeEach(()=>{

        render(
            <BrowserRouter>
                <ProductViewInfo product={{values, handleChange}}/>
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

    describe('Se renderizan los inputs del form', () => { 
        
        test('Se renderiza el input nombre con el valor inicial', ()=>{

            const input = screen.getByLabelText("Nombre", {selector: "input"});
            expect(input).toBeInTheDocument();
            //valor inicial
            expect(input).toHaveValue(values.nombre);
            //atributos
            expect(input).toHaveAttribute("type", "text");
            expect(input).toHaveAttribute("name", "nombre");
            expect(input).toHaveAttribute("placeholder", "InputValue");
            expect(input).toHaveAttribute("aria-labelledby", "nombre");
            expect(input).toHaveAttribute("autoComplete", "off");
            //handlechange

        });

        test('Se renderiza el input puntos con el valor inicial', ()=>{

            const input = screen.getByLabelText("Valor", {selector: "input"});
            expect(input).toBeInTheDocument();
            //valor inicial
            let value = parseInt(input.value);
            expect(value).toBe(values.puntos);
            //atributos
            expect(input).toHaveAttribute("type", "text");
            expect(input).toHaveAttribute("name", "puntos");
            expect(input).toHaveAttribute("placeholder", "InputValue");
            expect(input).toHaveAttribute("aria-labelledby", "puntos");
            expect(input).toHaveAttribute("autoComplete", "off");
            //handlechange

        });

        test('Se renderiza el input stock con el valor inicial', () => { 

            const input = screen.getByLabelText("Stock", {selector: "input"});
            expect(input).toBeInTheDocument();
            //valor inicial
            let value = parseInt(input.value);
            expect(value).toBe(values.stock);
            //atributos
            expect(input).toHaveAttribute("type", "text");
            expect(input).toHaveAttribute("name", "stock");
            expect(input).toHaveAttribute("aria-labelledby", "stock");
            //handlechange

        });

        test('Se renderiza el input description con el valor inicial', () => {

            const input = screen.getByLabelText("Descripcion", {selector: "textarea"});
            expect(input).toBeInTheDocument();
            //valor inicial
            expect(input).toHaveValue(values.description);
            //atributos
            expect(input).toHaveAttribute("name", "description");
            expect(input).toHaveAttribute("placeholder", "InputValue");
            expect(input).toHaveAttribute("aria-labelledby", "desc");
            //handlechange

        });

        test('Se renderiza el select tienda con dos options, pero uno esta oculto', () => {

            const select = screen.getByLabelText("Tienda", {selector: "select"});
            expect(select).toBeInTheDocument();
            //option selecciona
            const optionSelecciona = getByText(select, '--selecciona--');
            expect(optionSelecciona).toBeInTheDocument();
            expect(optionSelecciona).toHaveAttribute('hidden');
            //option tienda
            const optionOlivia = getByText(select, 'Olivia');
            expect(optionOlivia).toBeInTheDocument();
            expect(optionOlivia).not.toHaveAttribute('hidden');
            expect(optionOlivia).toHaveAttribute('value', 'olivia');

        });

    });

    describe('Cuando el usuario cambia el valor de los inputs, se cambia el valor de values', () => { 
        
        test('Se cambia el valor del input nombre', () => { 
            
            //arrange
            const input = screen.getByLabelText("Nombre", {selector: "input"});
            //act
            userEvent.clear(input);
            userEvent.type(input, "NUEVO NOMBRE");
            //assert
            expect(input).toHaveValue("NUEVO NOMBRE");

        });

        test('Se cambia el valor del input puntos', () => {

            //arrange
            const input = screen.getByLabelText("Valor", {selector: "input"});
            //act
            userEvent.clear(input);
            userEvent.type(input, "999");
            //assert
            expect(input).toHaveValue("999");

        });

        test('Se cambia el valor del input stock al hacer click en el boton -', () => {

            //arrange
            const input = screen.getByLabelText("Stock", {selector: "input"});
            const button = screen.getAllByRole("button");
            const oldInputValue = parseInt(input.value);
            //act
            userEvent.click(button[0]);
            //assert
            const newInputValue = parseInt(input.value);
            if(oldInputValue > 0){
                expect(newInputValue).toBe(oldInputValue - 1);
            }else{
                expect(newInputValue).toBe(0);
            }
            
        });

        test('Se cambia el valor del input stock al hacer click en el boton +', () => {

            //arrange
            const input = screen.getByLabelText("Stock", {selector: "input"});
            const button = screen.getAllByRole("button");
            const oldInputValue = parseInt(input.value);
            //act
            userEvent.click(button[1]);
            //assert
            const newInputValue = parseInt(input.value);
            expect(newInputValue).toBe(oldInputValue + 1);
        
        });

        test('Se cambia el valor del input description', () => {
        
            //arrange
            const input = screen.getByLabelText("Descripcion", {selector: "textarea"});
            //act
            userEvent.clear(input);
            userEvent.type(input, "NUEVA DESCRIPCION");
            //assert
            expect(input).toHaveValue("NUEVA DESCRIPCION");
        
        });

    });

})



