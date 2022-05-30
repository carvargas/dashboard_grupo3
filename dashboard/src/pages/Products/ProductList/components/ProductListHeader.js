import React, {useContext, useRef} from 'react';
//context
import { appContext } from '../../../../contexts/AppContext';

const ProductListHeader = () => {

  const{setSearch}= useContext(appContext)

  const title = useRef();
  const add = useRef();
  const closeSearchIcon = useRef();
  const input = useRef();
  const searchIcon = useRef();
  const searchContainer = useRef();

  const openSearch = (e) => {
    if(document.documentElement.clientWidth < 1025) {
      title.current.style.display = 'none';
      add.current.style.display = 'none';
      closeSearchIcon.current.style.display = 'flex';
      input.current.style.display = 'flex';
      input.current.setAttribute('placeholder', 'Buscar productos');
      searchContainer.current.style.paddingRight = '10px';
      searchContainer.current.style.width = '100%';
    }
  }
  const closeSearch = (e) => {
    if(document.documentElement.clientWidth < 1025) {
      title.current.style.display = 'flex';
      add.current.style.display = 'flex';
      closeSearchIcon.current.style.display = 'none';
      input.current.style.display = 'none';
      input.current.removeAttribute('placeholder');
      searchContainer.current.style.paddingRight = '0px';
      searchContainer.current.style.width = '40px';
    }
  }
  

  const handleSearch = (e) => {
    if(e.target.value !== ''){
      setSearch(e.target.value.trim().toLowerCase());
    }else{
      setSearch("");
    }
  }


  return (
    <nav className="productHeader">
        <ul>
            <li ref={title}><p className='title'>Productos</p></li>
            <div className='options-container'>
              <i ref={closeSearchIcon} className="fa-solid fa-xmark" onClick={closeSearch}></i>
              
              <li ref={searchContainer} className='searchContainer' onClick={openSearch}>
                <label htmlFor='search'><i ref={searchIcon} className="fa-solid fa-magnifying-glass searchIcon"></i></label>
                <input ref={input} type='text' id='search' name='search' placeholder={(document.documentElement.clientWidth > 1025) ? 'Buscar productos': ''} autoComplete='off' onChange={handleSearch}/>
              </li>
              
              <li ref={add} className='addContainer'>
                <button>
                  <i className="fa-solid fa-plus"></i>
                  <p>Agregar producto</p>
                </button>
              </li>
            </div>
        </ul>
    </nav>
  )
}

export default ProductListHeader