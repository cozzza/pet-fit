import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import Index from './components/Index/Index';

function App() {

  return (
      <BrowserRouter>
        <div className="App" style={{"backgroundColor":"#ece9ff"}}>
          <Navbar />
          <Switch>
            <Route exact path = '/'> <Index saludo='bienvenido a pet-fit' /> </Route>
            <Route exact path='/catalogo' component= {ItemListContainer} />
            <Route exact path='/categoria/:id' component={ItemListContainer}/>
            <Route exact path='/item/:id' component={ItemDetailContainer} />
          </Switch>

        </div>
      </BrowserRouter>
  );
}

export default App;
