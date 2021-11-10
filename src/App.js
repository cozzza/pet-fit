import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/items/ItemDetailContainer';

function App() {



  return (
    <BrowserRouter>
      <div className="App" style={{ "backgroundColor": "#dfdbff" }}>
        <Navbar/>
        <Switch>
          <Route exact path = '/'>
          <ItemListContainer className="container-fluid" catalog='Catálogo de disfraces'/>
          </Route>
          <Route exact path ='/detail' component= { ItemDetailContainer }/>
          
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
