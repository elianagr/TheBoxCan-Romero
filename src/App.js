//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/*<StarshipsContainer/>*/}
      <ItemListContainer/>
    </div>
  );
}

export default App;
