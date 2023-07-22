import '../App.css';
import NavBar from '../NavBar/NavBar';
import experience1 from './experience1.png';
import experience2 from './experience2.png';
import experience3 from './experience3.png';
import experience4 from './experience4.png';
import experience5 from './experience5.png';
import experience6 from './experience6.png';

function Experience() {
  return (
    <div className="App">
      <NavBar />
      <div className="Margin">
        <img src={experience1} className="Experience" alt="experience" />
      </div>
      <div>
        <img src={experience2} className="Experience" alt="experience" />
      </div>
      <div>
        <img src={experience3} className="Experience" alt="experience" />
      </div>
      <div>
        <img src={experience4} className="Experience" alt="experience" />
      </div>
      <div>
        <img src={experience5} className="Experience" alt="experience" />
      </div>
      <div>
        <img src={experience6} className="Experience" alt="experience" />
      </div>
    </div>
  );
}

export default Experience;
