import {screen, render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
//componentes
import ProductViewBody from './ProductViewBody';

test('se renderiza el componente ProductViewBody', () => { 
    
    const product = {
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
        stock:0,
        store:"http://localhost:3030/images/profile_pic.svg",
        __v:0
    }

    render(
        <BrowserRouter>
            <ProductViewBody product={product}/>
        </BrowserRouter>
    );

});

test('', () => { second })

