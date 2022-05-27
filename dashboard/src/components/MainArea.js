import React, { useContext} from 'react';
import menuImg from'../assets/img/menu.svg';
import { menuContext } from '../contexts/MenuContext';
import HeaderRoute from '../routes/HeaderRoute';
import MainRoute from '../routes/MainRoute'

const MainArea = () => {
    
    const{setMenu}= useContext(menuContext)
    
    const handleMenu = () => {
        setMenu(true)
    }
  return (
    
    <div className='main-area'>
      <header className='main-header'>
        <button className='menu-button' onClick={handleMenu}><img src={menuImg} alt='menu'/></button>
        <HeaderRoute />
      </header>
      <div className='content'>
        <MainRoute />
      </div>
        
    </div>

  )
}

export default MainArea;