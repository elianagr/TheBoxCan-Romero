//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import AppContextProvider from './components/context/AppContext';
import CartProvider from './components/context/CartContext';
import Footer from './components/Footer';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <AppContextProvider>
      <CartProvider>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetail/>}></Route>
        <Route path='/carrito' element={<Cart/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </CartProvider>
    </AppContextProvider>
  );
}

export default App;
