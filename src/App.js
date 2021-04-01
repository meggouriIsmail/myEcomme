import './App.css';
import Categories from './Categories';
import Hero from './Hero';
import NavBar from './navBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Categories/>
      <div style={{height:"300px"}}></div>
    </div>
  );
}

export default App;
