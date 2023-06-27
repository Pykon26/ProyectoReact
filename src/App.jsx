import Header  from './components/Header/header'
import ItemListCotainer from './components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {

  return (
    <>
      <div>

        <Header />

        <ItemListCotainer/>
        <ItemDetailContainer/>

      </div>
      
    </>
  )
}

export default App
