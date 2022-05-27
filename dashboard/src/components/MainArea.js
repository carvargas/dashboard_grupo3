<<<<<<< HEAD
import React, { useContext} from 'react'
import menuImg from'../assets/img/menu.svg'
import { menuContext } from '../contexts/MenuContext'
import ProductList from '../pages/Products/ProductList/ProductList'
=======
import React, { useContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import menuImg from'../assets/img/menu.svg';
import { menuContext } from '../contexts/MenuContext';
import MainRoute from '../routes/MainRoute'
>>>>>>> 28028ac61b72568c8014aa246e59d1cdff29634e

const MainArea = () => {
    
    const{setMenu}= useContext(menuContext)
    
    const handleMenu = () => {
        setMenu(true)
    }
  return (
    <BrowserRouter>

    <div className='main-area'>
        <button className='menu-button' onClick={handleMenu}><img src={menuImg} alt='menu'/></button>
<<<<<<< HEAD
       <ProductList/>
=======
        <MainRoute />
>>>>>>> 28028ac61b72568c8014aa246e59d1cdff29634e
    </div>
    </BrowserRouter>
  )
}

export default MainArea;