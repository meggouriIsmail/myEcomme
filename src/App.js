import './App.css';
import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Hero from './Hero';
import NavBar from './navBar'
import Products from './Products';
import ProductsData from './products.json';
import Footer from './Footer';

function App() {
  let [products, setProducts] = useState('');

  useEffect(() => {
    const data = ProductsData;
    setProducts(data.main.products);
  }, [setProducts]);


  return (
    <div className="App" onScroll={(e) => console.log(e)}>
      <NavBar/>
      <Hero/>
      <Categories/>
      <Products info={products} />
      <Footer/>
    </div>
  );
}

export default App;
