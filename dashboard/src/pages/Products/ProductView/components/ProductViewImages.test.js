//testing
import {screen, render} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
//dependencias
import { BrowserRouter } from "react-router-dom";
//componentes
import ProductViewImages from './ProductViewImages';
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
    gallery:["https://tienda.havanna.com.ar/wp-content/uploads/2020/10/alfajor70caco.jpg","https://tienda.havanna.com.ar/wp-content/uploads/2020/10/alfajor71caco.jpg"],
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

describe('Pruebas en el componente <ProductViewImages />', ()=>{

    beforeEach(()=>{

        render(
            <BrowserRouter>
                <ProductViewImages product={{values, handleChange}}/>
            </BrowserRouter>
        )
        
    });

    describe('Se renderiza el componente con un titulo y un form', () => { 

        test('Se renderiza el titulo', ()=>{

            const titulo = screen.getByRole("heading", {level: 3});
            expect(titulo).toBeInTheDocument();
            expect(titulo).toHaveTextContent("Galeria de imagenes");

        });

        test('Se renderiza el form', () => { 

            const form  = screen.getByRole("form");
            expect(form).toBeInTheDocument();

        });

    });

    describe('Se renderiza el input del form', () => { 
        
        test('Se renderiza el input Nueva imagen', ()=>{

            const input = screen.getByLabelText("Nueva imagen", {selector: "input"});
            expect(input).toBeInTheDocument();
            //atributos
            expect(input).toHaveAttribute("type", "text");
            expect(input).toHaveAttribute("name", "newImage");
            expect(input).toHaveAttribute("aria-labelledby", "newImage");
            expect(input).toHaveAttribute("placeholder", "InputValue");
            expect(input).toHaveAttribute("autoComplete", "off");

        });

    });

    describe('Se renderizan las imagenes actuales', () => { 

        test('Se renderiza el label "Imagenes actuales" si hay imagenes', ()=>{

            if(values.gallery.length !== 0){

                const label = screen.getByText("Imagenes actuales");
                expect(label).toBeInTheDocument();

            }

        });

        test('Se renderiza el label "No hay imagenes" si no hay imagenes ', () => { 

            if(values.gallery.length === 0){

                const label = screen.getByText("No hay imagenes");
                expect(label).toBeInTheDocument();

            }

        });

        test('Se renderizan todas las imagenes actuales si hay', ()=>{

            if(values.gallery.length !== 0){

                const images = screen.getAllByRole("img");

                expect(images).toHaveLength(values.gallery.length);

                images.forEach((image, index) => {
                    expect(image).toBeInTheDocument();
                    expect(image).toHaveAttribute("src", values.gallery[index]);
                });

            }

        });

        test('Se renderiza un boton para quitar la imagen', () => { 

            if(values.gallery.length !== 0){
                
                const buttons = screen.getAllByText("Quitar");

                expect(buttons).toHaveLength(values.gallery.length);
                
                buttons.forEach((button, index) => {
                    expect(button).toBeInTheDocument();
                    expect(button).toHaveValue(values.gallery[index]);
                });
            
            }

        });

    });

    describe('Se puede agregar y quitar una imagen', () => { 
        
        test('Se puede agregar una imagen', () => { 

            //guardo el valor de la galeria antes de quitar la imagen
            const oldGalleryLenght = values.gallery.length; //2

            //agrego una imagen
            const input = screen.getByLabelText("Nueva imagen", {selector: "input"});

            userEvent.clear(input);
            userEvent.type(input, "NUEVA IMAGEN");
            userEvent.tab();

            //guardo el valor de la galeria despues de agregar la imagen
            const newGalleryLenght = values.gallery.length; //3   

            //aparece la imagen en la galeria
            expect(newGalleryLenght).toBe(oldGalleryLenght + 1);
            expect(values.gallery[oldGalleryLenght]).toBe("NUEVA IMAGEN");

        });

        test('Se renderiza la nueva imagen agregada', () => {

            //guardo el valor de la galeria antes de quitar la imagen
            const oldGallery = values.gallery;

            //agrego una imagen
            const input = screen.getByLabelText("Nueva imagen", {selector: "input"});

            userEvent.clear(input);
            userEvent.type(input, "OTRA NUEVA IMAGEN");
            userEvent.tab();

            //obtengo la nueva galeria
            const newGallery = values.gallery;

            //se renderiza la nueva imagen (???)
            const images = screen.getAllByRole("img");

        }); 
        
        test('Se puede quitar una imagen', () => {

            if(values.gallery.length !== 0){

                //esta la imagen que se quiere quitar
                const button = screen.getAllByText("Quitar")[0];
                const imageToDelete = values.gallery[0];
                const img = screen.getAllByRole("img")[0];

                expect(img).toBeInTheDocument();
                expect(img).toHaveAttribute("src", imageToDelete);
                expect(button).toBeInTheDocument();
                expect(button).toHaveValue(imageToDelete);

                //guardo el valor de la galeria antes de quitar la imagen
                const oldGallery = values.gallery;

                //se quita la imagen
                userEvent.click(button);

                //se guarda el valor de la galeria despues de quitar la imagen
                const newGallery = values.gallery; //imgs
                console.log(newGallery);

                //ya no esta la imagen en la galeria
                expect(newGallery).toHaveLength(oldGallery.length - 1);
                expect(newGallery).not.toContain(imageToDelete);

            }

        });

    });

});



