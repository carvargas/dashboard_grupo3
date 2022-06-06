//testing
import {render, screen} from '@testing-library/react';
//dependencias
import { BrowserRouter } from 'react-router-dom';
//componentes
import ProductViewBody from './ProductViewBody';
//mocks
import useProductListFetch from '../../../../hooks/useProductListFetch';
jest.mock('../../../../hooks/useProductListFetch');

let products = [
    {
        _id:"3",
        category:"Alimentos",
        nombre:"ALFAJORES CHOCOLATE x 12 uds",
        description:"Alfajores rellenos con dulce de leche con cobertura de chocolate x 12 unidades.",
        src:"https://tienda.havanna.com.ar/wp-content/uploads/2020/04/alfajorChocolatex12.jpg",
        alt:"foto Alfajores Chocolate",
        puntos:16000,
        gallery:["https://tienda.havanna.com.ar/wp-content/uploads/2020/04/alfajorChocolatex12.jpg"],
        mostwanted:false,
        suggested:false,
        stock:0,
        store:"http://localhost:3030/images/profile_pic.svg",
        __v:0
    },
    {
        _id:"4",
        category:"Electrónica",
        nombre:"Chromecast Full HD carbón",
        description:"Con los beneficios del Chromecast, las pantallas se convertirán en un mundo de contenidos para disfrutar. Este media player permite acceder a distintas plataformas multimedia. Se destaca también por actualizarse automáticamente para que interactúes con un mayor número de aplicaciones.",
        src:"https://http2.mlstatic.com/D_NQ_NP_620605-MLA32691559317_102019-O.webp",
        alt:"foto Chromecast",
        puntos:56900,
        gallery:["https://http2.mlstatic.com/D_NQ_NP_620605-MLA32691559317_102019-O.webp"],
        mostwanted:false,
        suggested:false,
        stock:0,
        store:"http://localhost:3030/images/profile_pic.svg",
        __v:0
    }
];
let isLoading = false;

let product = {
    _id:"3",
    category:"Alimentos",
    nombre:"ALFAJORES CHOCOLATE x 12 uds",
    description:"Alfajores rellenos con dulce de leche con cobertura de chocolate x 12 unidades.",
    src:"https://tienda.havanna.com.ar/wp-content/uploads/2020/04/alfajorChocolatex12.jpg",
    alt:"foto Alfajores Chocolate",
    puntos:16000,
    gallery:["https://tienda.havanna.com.ar/wp-content/uploads/2020/04/alfajorChocolatex12.jpg"],
    mostwanted:false,
    suggested:false,
    stock:0,
    store:"http://localhost:3030/images/profile_pic.svg",
    __v:0
};

let values = {
    _id:"3",
    category:"Alimentos",
    nombre:"NUEVO NOMBRE PRODUCTO",
    description:"Alfajores rellenos con dulce de leche con cobertura de chocolate x 12 unidades.",
    src:"https://tienda.havanna.com.ar/wp-content/uploads/2020/04/alfajorChocolatex12.jpg",
    alt:"foto Alfajores Chocolate",
    puntos:16000,
    gallery:["https://tienda.havanna.com.ar/wp-content/uploads/2020/04/alfajorChocolatex12.jpg"],
    mostwanted:false,
    suggested:false,
    stock:0,
    store:"http://localhost:3030/images/profile_pic.svg",
    __v:0
};

const handleChange = (e) => {
    let {name, value} = e.target;
    values[name] = value;
}

if(product._id === 0 && products.length > 0){
    product._id = products.length + 1;
    values._id = products.length + 1;
  }

const handleSaveProducts = () => {

    if(values._id > products.length){
      
      //api nuevo producto
      fetch(`http://localhost:3030/api/agregarNuevoProducto`, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json"
        }
      });
      console.log("producto agregado");

    }else{
      
      //api editar producto
      fetch(`http://localhost:3030/api/editarProducto/${values._id}`, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json"
        }
      })

      console.log("producto actualizado");
      
    }
}

describe('Testeando <ProductViewBody/>', () => { 

    beforeEach(() => {

        useProductListFetch.mockReturnValue([products, isLoading]);

        render(
            <BrowserRouter>
                <ProductViewBody product={product}/>
            </BrowserRouter>
        );
    });

    test('Se renderizan el boton "cancelar" y el boton "guardar"', () => {
        
        const botonCancelar = screen.getByRole('button', {name: 'Cancelar'});
        expect(botonCancelar).toBeInTheDocument();

        const botonGuardar = screen.getByRole('button', {name: 'Guardar'});
        expect(botonGuardar).toBeInTheDocument();

    });

    test('Se guarda el producto al hacer click en "guardar"', () => {

        //guardo el viejo nombre del producto        
        const oldPoductName = product.nombre;
        console.log(oldPoductName);
        //cambio el nombre del producto
        const botonGuardar = screen.getByRole('button', {name: 'Guardar'});
        botonGuardar.click();

        //guardo el nuevo nombre del producto
        const newProductName = product.nombre;
        console.log(newProductName);
        
    });


});
