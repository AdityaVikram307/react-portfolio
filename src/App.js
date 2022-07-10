import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
function App() {
  return (
    < >
    <Navbar />
    <Header />
    <About />
    <Education />
    <Skills />
    <Portfolio />
    <Footer />
    </>
  );
}

export default App;
