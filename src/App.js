import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Timings from './components/Timings';
import Map from './components/Map';
import Achievements from './components/Achievements';
import Footer from './components/Footer';


function App() {
  return (
    <div className="website">

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Achievements/>

      <Map />

      <Timings />
      
      <Footer />

    </div>
  );
}

export default App;