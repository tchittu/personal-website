import logo from './logo.png';
import './App.css';
import NavBar from './NavBar/NavBar';

function Home() {
  return (
    <div className="App">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Home;
