import React from 'react';
import '../ProductList.css'

const ProductListHeader = () => {
  return (
    <nav>
        <ul>
            <li><p>Productos</p></li>
            <div>
                <li><button>(?)</button></li>
                <li><button>(+)</button></li>
            </div>
            
        </ul>
    </nav>
  )
}

export default ProductListHeader