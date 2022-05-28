import {Routes, Route} from 'react-router-dom';

const HeaderRoute = () => {
  return (
        <Routes>

            <Route path='/' element={<h1>Probando Header Home</h1>} />
            <Route path='/products' element={<h1>Probando Header Products</h1>} />
            <Route path='/products/:id' element={<h1>Probando Header Detalle Producto</h1>} />
            <Route path='/products/new' element={<h1>Probando Header Agregar Producto</h1>} />
            <Route path='/*' element={<h1>Probando Header</h1>} />
        
        </Routes>
  )
}

export default HeaderRoute;