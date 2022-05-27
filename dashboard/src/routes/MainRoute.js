import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import NewProduct from '../pages/Products/NewProduct/NewProduct';
import ProductList from '../pages/Products/ProductList/ProductList';
import ProductView from '../pages/Products/ProductView/ProductView';

const MainRoute = () => {
  return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductView />} />
            <Route path='/products/new' element={<NewProduct />} />
            <Route path='/*' element={
              <>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>
                <h1>¡Ups! No hemos encontrado esta página</h1>

              </>
            
            } />
        
        </Routes>
  )
}

export default MainRoute;