import React, { useContext } from 'react'
import { menuContext } from '../contexts/MenuContext'
import useOnClickOutside from '../hooks/useOnlickOutside'

const Sidebar = () => {
  const {menu, setMenu } = useContext(menuContext)

  const menulRef = useOnClickOutside( () => setMenu(false))

  return (
    <div ref={menulRef} className={menu? 'sidebar show-menu':'sidebar'}>Sidebar</div>
  )
}

export default Sidebar