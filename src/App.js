import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import Index from './components/Index/Index';
import CartContextProvider from './components/Context/CartContext';
import {Cart} from './components/Cart/Cart'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App" style={{"backgroundColor":"#ece9ff"}}>
          <Navbar />
          <Switch>
            <Route exact path = '/'> <Index saludo='bienvenido a pet-fit' /> </Route>
            <Route exact path='/catalogo' component= {ItemListContainer} />
            <Route exact path='/catalogo/:categoriaId' component={ItemListContainer}/>
            <Route exact path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart}/>
          </Switch>
        </div>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
