import React from 'react';
import '../ProductList.css'

const ProductListHeader = () => {
  return (
    <nav className="productHeader">
        <ul>
            <li><p>Productos</p></li>
            <div>
                <li className='searchContainer'>
                  <label htmlFor='search'><i className="fa-solid fa-magnifying-glass searchIcon"></i></label>
                  <input type='text' id='search' name='search'/>
                </li>
                <li className='addContainer'>
                  <button><i className="fa-solid fa-plus"></i></button>
                </li>
            </div>
            
        </ul>
    </nav>
  )
}

export default ProductListHeader