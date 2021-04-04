import React, { useState, useEffect } from 'react';
import './App.css';
import Categories from './Categories';
import Hero from './Hero';
import NavBar from './navBar'
import Products from './Products';
import Footer from './Footer';
import Search from './Search';
import { Transition } from 'react-transition-group';

function App() {
  let [products, setProducts] = useState('');
  let [searchModel, setModel] = useState(false);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
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
