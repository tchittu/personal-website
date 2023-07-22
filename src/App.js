import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Experience from './Experience/Experience'

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/experience' element={<Experience />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
