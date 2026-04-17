import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import { Project } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import FloatingLogo from './components/FloatingLogo';
import './App.css';
import './Responsive.css';


function App() {
  const [isBannerHidden, setIsBannerHidden] = useState(false);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner onVisibilityChange={setIsBannerHidden} />
        <Skills />
        <Project />
        <Contact />
        <FloatingLogo isVisible={isBannerHidden} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
