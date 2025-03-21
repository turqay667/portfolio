
import './App.css';
import Header from './Components/Header';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import Skills from './Components/Skill';
function App() {
  const [darkMode,setDarkMode]=useState(false)
  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("dark")
    }
    else{
      document.body.classList.remove("dark")
    }
  },[darkMode])
  return (
    <div className="App">
      <Header/>
       <About/>
       <Services/>
       <Portfolio/>
       <Skills/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
