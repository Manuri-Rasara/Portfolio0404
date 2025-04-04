
import './App.css';
import Navbar from '../src/Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Tech from './Components/Tech';
import Project from './Components/Project';
import Service from './Components/Service';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Home/>
   <About></About>
   <Tech/>
   <Project/>
   <Service/>
   <Contact/>
    </div>
  );
}

export default App;
