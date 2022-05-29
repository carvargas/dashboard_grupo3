import React, { useContext} from 'react';
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
        <button className='menu-button' onClick={handleMenu}><i class="fa-solid fa-bars"></i></button>
        <HeaderRoute />
      </header>
      <div className='content'>
        <MainRoute />
      </div>
        
    </div>

  )
}

export default MainArea;