import React, { useContext } from 'react'
import { appContext } from '../contexts/AppContext'
import useOnClickOutside from '../hooks/useOnClickOutside'

const Sidebar = () => {
  const {menu, setMenu } = useContext(appContext)

  const menulRef = useOnClickOutside( () => setMenu(false))

  return (
    <div ref={menulRef} className={menu? 'sidebar show-menu':'sidebar'}>Sidebar</div>
  )
}

export default Sidebar