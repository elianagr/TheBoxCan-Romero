//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import ProductoDetail from './components/firebase/ProductoDetail';
import Productos from './components/firebase/Productos';
import AppContextProvider from './components/context/AppContext';
import CartContextProvider from './components/context/CartContext';
import Footer from './components/Footer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import ItemListContainer from './components/Item/ItemListContainer';
import NavBar from './components/NavBar';
import Checkout from './components/Cart/Checkout'


function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Productos/>}></Route>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/producto' element={<ProductoDetail/>}></Route>
            <Route path='/carrito' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}
export default App;