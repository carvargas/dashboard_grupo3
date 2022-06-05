//testing
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
//hook
import { useForm } from './useForm';

describe('Testeando el Hook', () => { 

    const initialState = {
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
    };
    const secondState = {
        _id:"333",
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
    };
    const event = {
        event_id: { target: {name: '_id', value: "3"} },
        event_category: { target: {name: 'category', value: "Bebidas"} },
        event_nombre: { target: {name: 'nombre', value: "Alfajores 70% Cacao Puro x 9 uds"}},
        event_description: { target: {name: 'description', value: "Alfajores rellenos con dulce de leche con cobertura de chocolate 70% Cacao Puro x 9 unidades"} }
    }

    //Renderizamos el hook
    const { result } = renderHook(() => useForm(initialState));
    let [ handleChange, values, resetValues, setValues ] = result.current;

    test('El hook inicializa con un producto y sus funciones', () => {
    
        expect(values).toEqual(initialState);
        
        expect(typeof handleChange).toBe('function');
        expect(typeof resetValues).toBe('function');
        expect(typeof setValues).toBe('function');
        
    });

    test('HandleChange cambia los productos de values', () => {

        expect(values).toEqual(initialState);
        
        act(() => {
            handleChange(event.event_id);
        });
        
    });

    test('ResetValues resetea los productos de values', () => {
        
        expect(values).toEqual(initialState);

        act(() => {
            handleChange(event.event_id);
        });
        
    });

    test('SetValues setea los productos de values', () => {
        
        expect(values).toEqual(initialState);
        
        act(() => {
            setValues(secondState);
        });
    
    });

});

