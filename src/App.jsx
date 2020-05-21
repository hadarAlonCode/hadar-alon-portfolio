import React, {useState,useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ScrollTopIcon from './components/ScrollTopIcon/ScrollTopIcon';
import { ScrollToTop } from './functions/scroll';
import Contact from './components/Contact/Contact';

function App() {


  const [first_load, setFirstLoad] = useState(true)



  useEffect(() => {
       
    let scroll_icon = document.getElementById("scroll__icon");
    let body_element = document.getElementsByTagName("BODY")[0]
    if(scroll_icon && body_element && first_load ){

      let myScrollFunc = function() {
        let scroll = window.scrollY
        scroll >= 300 ? scroll_icon.className = "scroll__icon--show" : scroll_icon.className = "scroll__icon--hide"
        };
      
        window.addEventListener("scroll", myScrollFunc);
        setFirstLoad(false)
    }
    
    
  } );


  return (
    <div id="#" className="App">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTopIcon scrollTo={ScrollToTop}/>
    </div>
  );
}

export default App;
