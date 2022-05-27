import React, { useContext} from 'react'
import menuImg from'../assets/img/menu.svg'
import { menuContext } from '../contexts/MenuContext'

const MainArea = () => {

    const menuCtxt = useContext(menuContext)
    const{setMenu} = menuCtxt
    
    const handleMenu = () => {
        setMenu(true)
    }
  return (
    <div className='main-area'>
        <button className='menu-button' onClick={handleMenu}><img src={menuImg} alt='menu'/></button>
       <h1>MainArea</h1> 
    </div>
  )
}

export default MainArea