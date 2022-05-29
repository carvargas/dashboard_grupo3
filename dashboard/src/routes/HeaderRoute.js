import {Routes, Route} from 'react-router-dom';
import ProductListHeader from '../pages/Products/ProductList/components/ProductListHeader';
import ProductViewHeader from '../pages/Products/ProductView/components/ProductViewHeader';

const HeaderRoute = () => {
  return (
        <Routes>

            <Route path='/' element={<h1>Probando Header Home</h1>} />
            <Route path='/products' element={<ProductListHeader/>} />
            <Route path='/products/:id' element={<ProductViewHeader/>} />
            <Route path='/products/new' element={<h1>Probando Header Agregar Producto</h1>} />
            <Route path='/*' element={<h1>Probando Header</h1>} />
        
        </Routes>
  )
}

export default HeaderRoute;