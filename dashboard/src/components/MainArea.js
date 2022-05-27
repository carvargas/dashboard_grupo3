import React, { useContext} from 'react'
import menuImg from'../assets/img/menu.svg'
import { menuContext } from '../contexts/MenuContext'
import ProductList from '../pages/Products/ProductList/ProductList'

const MainArea = () => {

    const menuCtxt = useContext(menuContext)
    const{setMenu} = menuCtxt
    
    const handleMenu = () => {
        setMenu(true)
    }
  return (
    <div className='main-area'>
        <button className='menu-button' onClick={handleMenu}><img src={menuImg} alt='menu'/></button>
       <ProductList/>
    </div>
  )
}

export default MainArea