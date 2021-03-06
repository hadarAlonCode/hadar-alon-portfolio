import React, {useEffect , useState} from 'react';
import logo from "../../images/hadar.png"

const NavBar = props => {
    const [first_load, setFirstLoad] = useState(true)
    const [toggle_mobile_nav, setToggleMobileNav] = useState(true)
    const [show_mobile_nav_link, setShowMobileLink] = useState(false)

    

    useEffect(() => {
        let innerWidth = window.innerWidth;
        innerWidth <= 800 ? toggleMobileNav(true) : toggleMobileNav(false)
        window.addEventListener("resize", onResize);
        
      } , []);


    useEffect(() => {
      
        let nav = document.getElementById("nav");
        if( nav && first_load ){
    
        let scrollFunc = function() {
            let innerWidth = window.innerWidth;

            let scroll = window.scrollY
            let num =400
            if(innerWidth <= 500){
                num=280
            }
          
           
            if (scroll >= num) {
                nav.classList.add("navbar__container__color");
                nav.classList.remove("navbar__container");
            } else {
                nav.classList.add("navbar__container");
                nav.classList.remove("navbar__container__color");
            }
        };

            window.addEventListener('scroll', scrollFunc)   
            setFirstLoad(false)
        }
      } );


      const onResize =()=>{
        let innerWidth = window.innerWidth;
        innerWidth <= 800 ? toggleMobileNav(true) : toggleMobileNav(false)
    }


    const toggleMobileNav=(boolean)=>{
        setToggleMobileNav(boolean)
    }


    const toggleOpenMobileNav =()=>{
        setShowMobileLink(!show_mobile_nav_link)
    }

    
    return (
       
        <nav className={toggle_mobile_nav ? "navbar__container mobile__nav" : "navbar__container"} id="nav">
            
                {toggle_mobile_nav ? 
                <div>
                    <button onClick={()=>toggleOpenMobileNav()} className={show_mobile_nav_link ? "hamburger hamburger--collapse is-active": "hamburger hamburger--collapse"} type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                    </button>
               </div>
       
               : null
               }
             
                <ul className= {show_mobile_nav_link ? "grid mobile__navbar--on mobile__navbar" : "grid mobile__navbar"} >
               
                <a onClick={()=>toggleOpenMobileNav()} href={"#"} >
                    <li>
                        <img className='navbar__logo'src={logo} alt="hadar" />
                    </li>
                </a>
                <a className="navbar__link"  onClick={()=>toggleOpenMobileNav()}href={"#aboutL"}>
                    <li >About</li>
                </a>
                <a className="navbar__link" onClick={()=>toggleOpenMobileNav()} href={"#projectsL"} >
                    <li >Projects</li>
                </a>
                <a  className="navbar__link" onClick={()=>toggleOpenMobileNav()} href={"#footerL"} >  
                    <li >Contact</li>
                </a>
              
                </ul>
               
        </nav>
       
    );
};


export default NavBar;