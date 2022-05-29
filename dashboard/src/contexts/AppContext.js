import React, { createContext, useState } from 'react'

export const appContext = createContext()



const AppContext = ({children}) => {
  
    const {Provider} = appContext;
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState("");
    
  return (
    <Provider value={{menu, setMenu, search, setSearch}}>
        {children}
    </Provider>
  )
}

export default AppContext