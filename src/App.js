import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  // useEffect(() => {
  //       alert('llamada a api')
  // )}
  
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer saludo='Bienvenido a petFit'/>
    </div>
  );
}

export default App;
