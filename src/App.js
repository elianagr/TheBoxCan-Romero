//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetail/>}></Route>
        {/*<StarshipsContainer/>*/}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
