import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ItemDetailContainer } from './components/ItemDetailContanier/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemlistContainer/ItemListContainer';
import { CartProvider } from './components/CartContext/CartContext';
import { Cart } from './components/Cart/Cart';
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra';
function App() {
  return (
    
    <main style={{padding:'0', margin:'0' }} >
      <CartProvider >
        <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path="/">
              <ItemListContainer />
              </Route>
              <Route exact path="/category/:categoryID">
                <ItemListContainer />
              </Route> 
              <Route exact path="/item/:pId">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/cart/finalizarCompra">
                <FinalizarCompra />
              </Route>
            </Switch>
          </BrowserRouter>
          </CartProvider>
      
      <Footer />
      
    </main>


      
  );
}

export default App;
