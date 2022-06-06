//Testing
import { render,screen } from "@testing-library/react";
//dependencias emocionales
import { BrowserRouter } from "react-router-dom";
//componentes
import ProductListCard from "./ProductListCard";

//Objeto literal
let product = 
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
    }


//Funcion test
describe('testiando-ProductListCard', () => { 
    
    beforeEach( () => {
        render(
            <BrowserRouter>
                <ProductListCard product = {product}/>
            </BrowserRouter>
        )
    })
    
    test('Renderizando li', () => { 
        let li = screen.getByRole("listitem");
        expect(li).toBeInTheDocument();
     })

     test('imagen esta?', () => { 
         let imagen = screen.getByRole("img");
         expect(imagen).toBeInTheDocument();
         expect(imagen).toHaveAttribute("src",product.src);
         expect(imagen).toHaveAttribute("alt",product.alt);
     })

     test('titulo', () => { 
        let titulo = screen.getByRole("heading");
        expect(titulo).toBeInTheDocument();
        expect(titulo).toHaveTextContent(product.nombre);
    })

    test('paragraph ID', () => { 
        let paragraph = screen.getByText(`#${product._id}`);
        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toHaveTextContent(product._id);
    })

    test('boton funciona?', () => { 
        let but = screen.getByRole("button");
        expect(but).toBeInTheDocument();
    })


 })