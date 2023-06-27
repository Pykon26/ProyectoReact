import Header  from './components/Header/header'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <BrowserRouter>
  <div>
        <Header />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:marcaId" element={<ItemListContainer />} />
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1> }/>

        </Routes>

  </div>
  </BrowserRouter>

    
  )
}

export default App
