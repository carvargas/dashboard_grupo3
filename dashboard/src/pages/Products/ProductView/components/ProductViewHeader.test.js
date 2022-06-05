//testing
import {render, screen} from '@testing-library/react';
//dependencias
import { BrowserRouter } from 'react-router-dom';
//componentes
import ProductViewHeader from './ProductViewHeader';
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

describe('Teseando ProductViewHeader', () => { 

    describe('test si es el header de un nuevo producto', () => { 
        
        beforeEach(() => {
            useProductListFetch.mockReturnValueOnce([products, isLoading]);
    
            global.window = Object.create(window);
            const url = "http://localhost:3030/products/new";
            Object.defineProperty(window, "location", {
                value: {
                   pathname: url
                },
                writable: true
            });
    
            render(
                <BrowserRouter>
                    <ProductViewHeader/>
                </BrowserRouter>
            )
        });

        test('should first', () => { 
            expect(true).toBe(true);
        });

    });

    describe('test si es el header de un producto', () => { 
       
        beforeEach(() => {
            useProductListFetch.mockReturnValueOnce([products, isLoading]);
    
            global.window = Object.create(window);
            const url = "http://localhost:3030/products/3";
            Object.defineProperty(window, "location", {
                value: {
                   pathname: url
                },
                writable: true
            });
    
            render(
                <BrowserRouter>
                    <ProductViewHeader/>
                </BrowserRouter>
            )
        });

        test('true', () => { 
            expect(true).toBe(true);
        });
        
    });
    
});
