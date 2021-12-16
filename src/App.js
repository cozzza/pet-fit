import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import Index from './components/Index/Index';
import CartContextProvider from './components/Context/CartContext';
import {Cart} from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import FaQs from './components/FaQs/FaQs'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch >
            <Route exact path = '/'> <Index saludo='Bienvenido a PetFit' /> </Route>
            <Route exact path='/productos' component= {ItemListContainer} />
            <Route exact path='/productos/:categoriaId' component={ItemListContainer}/>
            <Route exact path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/contacto' component={Contacto}/> 
            <Route exact path='/faQs' component={FaQs}/> 
          </Switch>

          <Footer/>
        </div>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
