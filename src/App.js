//import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
        <ItemList producto='Collar' precio='2500' />
      </ItemListContainer>
    </div>
  );
}

export default App;
