import React, { useContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import menuImg from'../assets/img/menu.svg';
import { menuContext } from '../contexts/MenuContext';
import MainRoute from '../routes/MainRoute'

const MainArea = () => {
    
    const{setMenu}= useContext(menuContext)
    
    const handleMenu = () => {
        setMenu(true)
    }
  return (
    <BrowserRouter>

    <div className='main-area'>
        <button className='menu-button' onClick={handleMenu}><img src={menuImg} alt='menu'/></button>
        <MainRoute />
    </div>
    </BrowserRouter>
  )
}

export default MainArea;