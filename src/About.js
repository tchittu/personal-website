import './App.css';
import NavBar from './NavBar';
import aboutMe from './aboutMe.png';
import photo from './photo.png';

function About() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <img src={aboutMe} className="About" alt="info" />
      </div>
      <img src={photo} className="Photo" alt="me" />
    </div>
  );
}

export default About;
