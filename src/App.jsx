import Header  from './components/Header/header'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {

  return (
    <BrowserRouter>
      <CartProvider>

      <div>
          <Header />
          <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:marcaId" element={<ItemListContainer />} />
          <Route path="/detalle/:itemId" element={<ItemDetailContainer />}/>
          {/* <Route path="/cart" element={<Cart />}/> */}
          <Route path="*" element={<h1>404 NOT FOUND</h1> }/>

          </Routes>

       </div>

      </CartProvider>
  </BrowserRouter>

    
  )
}

export default App
