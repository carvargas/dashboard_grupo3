import React, { createContext, useState } from 'react'

export const appContext = createContext()



const AppContext = ({children}) => {
  
    const {Provider} = appContext;
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState("");
    const [editProduct, setEditProduct] = useState({});
    
  return (
    <Provider value={{menu, setMenu, search, setSearch, editProduct, setEditProduct}}>
        {children}
    </Provider>
  )
}

export default AppContext