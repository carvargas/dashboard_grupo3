//testing
import {render, screen} from '@testing-library/react';
//dependencias
import { BrowserRouter } from 'react-router-dom';
//componentes
import ProductViewCard from './ProductViewCard';

let product = {
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

describe('Testeando <ProductViewCard/>', () => { 
   
    beforeEach(() => {

        render(
            <BrowserRouter>
                <ProductViewCard product={product}/>
            </BrowserRouter>
        )

    });

    describe('Se renderiza el componente con una imagen, nombre, puntos, stock y tienda', () => { 
       
        test('Se renderiza la imagen', ()=>{

            const imagen = screen.getAllByRole("img")[0];
            
            expect(imagen).toBeInTheDocument();
            expect(imagen).toHaveAttribute('src', product.src);
            expect(imagen).toHaveAttribute('alt', product.alt);

        });

        test('Se renderiza el nombre', ()=>{
                
            const nombre = screen.getByText(product.nombre);

            expect(nombre).toBeInTheDocument();

        });

        test('Se renderiza los puntos', ()=>{

            const puntos = screen.getByText(`${product.puntos}`);

            expect(puntos).toBeInTheDocument();

        });

        test('Se renderiza el stock', ()=>{
                
            const stock = screen.getByText(`${product.stock}`);
    
            expect(stock).toBeInTheDocument();
    
        });

        test('Se renderiza la tienda', ()=>{
                    
            const imagen = screen.getAllByRole("img")[1];
            
            expect(imagen).toBeInTheDocument();
            expect(imagen).toHaveAttribute('src', product.store);
        });


    });

});