import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WhatsAppLogo from './components/WhatsAppLogo/WhatsAppLogo'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import CategoryContainer from './components/CategoryContainer/CategoryContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <WhatsAppLogo />
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categorias/:idCategoria' element={<CategoryContainer />} />
            <Route path='/products/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
