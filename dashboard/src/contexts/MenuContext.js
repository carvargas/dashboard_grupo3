import React, { createContext, useState } from 'react'

export const menuContext = createContext()



const MenuContext = ({children}) => {
  
    const {Provider} = menuContext
    const [menu, setMenu] = useState(false)
    
  return (
    <Provider value={{menu, setMenu}}>
        {children}
    </Provider>
  )
}

export default MenuContext