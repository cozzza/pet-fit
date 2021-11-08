import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  // useEffect(() => {
  //       alert('llamada a api')
  // )}
  
  return (
    <div className="App" style={{"backgroundColor":"#dfdbff"}}>
      <Navbar/>

      <ItemListContainer  className="container-fluid" catalog='Catálogo de disfraces'/>
    </div>
  );
}

export default App;
