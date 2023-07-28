//import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from "./context/CarritoContext"
import Cart from "./Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"



const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>

            <Route path="/" element={ <ItemListContainer/> } />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
            <Route path="/item/:idItem" element={ <ItemDetailContainer/> } />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={ <h2> "Pagina Caida. Intente Nuevamente" </h2> } />


          </Routes>
        </CarritoProvider>

      </BrowserRouter>


      {/* <ItemCount />
      <ItemListContainer greeting={"Bienvenidos a Libreria Online"} />
      <ItemDetailContainer />
 */}
    </>
  )
}

export default App