import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Experience from './Experience'

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
