import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import { Project } from './components/Projects';
import { Contact } from './components/Contact';
import {Footer} from './components/Footer';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
