import React, { useContext } from 'react'
import { menuContext } from '../../contexts/MenuContext'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import logo from '../../assets/img/MiEcommerce.svg'
import profilePic from '../../assets/img/profile_pic.svg'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const {menu, setMenu } = useContext(menuContext)

  const menulRef = useOnClickOutside( () => setMenu(false))

  const handleFocus = (e) =>{
    console.log(e.target)

  }

  return (
    <div ref={menulRef} className={menu? 'sidebar show-menu':'sidebar'}>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className='menu-container'>
        <ul className='menu-list'>
          <Link to={'/'}>
            <li>            
              <i className="fa-solid fa-house"></i>
                Inicio
            </li>
          </Link>
          <Link to={'/products'}>
            <li onClick={handleFocus}>            
              <i className="fa-solid fa-box"></i>
              Productos          
            </li>
          </Link>
        </ul>

        

      </div>
      <div className='profile-container'>
        <div className="profile">
            <img src={profilePic} alt="cart" />
            <p>Olivia</p>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar