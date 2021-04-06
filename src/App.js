import React, { useState } from 'react';
import './App.css';
import NavBar from './components/navBar'
import Products from './components/Products';
import Footer from './components/Footer';
import Search from './components/Search';
import { Transition } from 'react-transition-group';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/ProductDetails';

function App() {
  let [searchModel, setModel] = useState(false);
  
  function showSearch() {
    setModel(!searchModel);
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Transition in={searchModel} timeout={200}>
          {(state) => (
              <Search className={`search s-${state}`} toggle={showSearch} />
          )}
        </Transition>
        <NavBar Click={showSearch} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Products}/>
          <Route path="/shop/:id" component={Product} />
        </Switch>  
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
