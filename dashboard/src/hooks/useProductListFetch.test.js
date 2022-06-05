//testing
import { renderHook, act } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
//hook
import useProductListFetch from './useProductListFetch';

describe('hook useProductListFetch', () => { 

    //Renderizamos el hook
    const { result } = renderHook(() => useProductListFetch());
    let [ products , isLoading ] = result.current;

    test('El hook inicializa con un producto y sus funciones', () => { 
        
        expect(products).toEqual([]);
        expect(isLoading).toBe(true);
        
    });

});