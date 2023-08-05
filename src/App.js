import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

function App() {
  return (
    <>
      <NavBar />
      <HashRouter basename='/'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/experience' element={<Experience />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
