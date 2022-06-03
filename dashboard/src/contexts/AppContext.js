import React, { createContext, useState, useEffect } from 'react';
export const appContext = createContext()


/*------------------------------ Menu y busquedas ---------------------------*/
const AppContext = ({children}) => {
  
    const {Provider} = appContext;
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState("");
/*-------------------------------- Modo Oscuro ------------------------------*/
    const body = document.querySelector(':root');
    const [modoOscuro, setModoOscuro] = useState(false);
    const cambiarModo =  () => {
      setModoOscuro(!modoOscuro);
      localStorage.setItem('modoOscuro', modoOscuro);
    }

    useEffect(() => {
      if(localStorage.getItem('modoOscuro') === "true" ){
        body.classList.add('dark');
      }else{
        body.classList.remove('dark');
      }
    }, [modoOscuro])

/*-------------------------------- Return ------------------------------*/
  return (
    <Provider value={{menu, setMenu, search, setSearch, modoOscuro, cambiarModo}}>
        {children}
    </Provider>
  )
}

export default AppContext