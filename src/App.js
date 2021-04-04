import React, { useState, useEffect } from 'react';
import './App.css';
import Categories from './Categories';
import Hero from './Hero';
import NavBar from './navBar'
import Products from './Products';
import ProductsData from './products.json';
import Footer from './Footer';
import Search from './Search';
import { Transition } from 'react-transition-group';

function App() {
  let [products, setProducts] = useState('');
  let [searchModel, setModel] = useState(false);

  useEffect(() => {
    const data = ProductsData;
    setProducts(data.main.products);
  }, [setProducts]);

  function showSearch() {
    setModel(!searchModel);
  }

  return (
    <div className="App">
      <Transition in={searchModel} timeout={200}>
        {(state) => (
            <Search className={`search s-${state}`} toggle={showSearch} />
        )}
      </Transition>
      <NavBar Click={showSearch} />
      <Hero/>
      <Categories/>
      <Products info={products} />
      <Footer/>
    </div>
  );
}

export default App;
