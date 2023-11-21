import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/ProductDetails';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Transition } from 'react-transition-group';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';

function App() {
  let [searchModel, setModel] = useState(false);

  function showSearch() {
    setModel(!searchModel);
  }

  return (
    <BrowserRouter className="App">
      <Transition in={searchModel} timeout={200}>
        {(state) => (
          <Search className={`search s-${state}`} toggle={showSearch} />
        )}
      </Transition>
      <NavBar Click={showSearch} />
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/shop`} component={Products} />
        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
        <Route path={`${process.env.PUBLIC_URL}/shop/:id`} component={Product} />
        <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
