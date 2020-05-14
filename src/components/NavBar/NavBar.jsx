import React, {useEffect , useState} from 'react';
import logo from "../../images/hadar.png"

const NavBar = props => {
    const [first_load, setFirstLoad] = useState(true)
    const [toggle_mobile_nav, setToggleMobileNav] = useState(false)
    const [show_mobile_nav_link, setShowMobileLink] = useState(false)

    

    useEffect(() => {
        let innerWidth = window.innerWidth;

        if(innerWidth <= 800){
            toggleMobileNav(true)
        }else{
            toggleMobileNav(false)
        }

        window.addEventListener("resize", onResize);
        
      } , []);


    useEffect(() => {
      
        let nav = document.getElementById("nav");
        if( nav && first_load ){
    
          let scrollFunc = function() {
            let scroll = window.scrollY
           
            if (scroll >= 400) {
                nav.className = "navbar__container__color"
            } else {
                nav.className = "navbar__container"
            }
            };

            window.addEventListener('scroll', scrollFunc)   
            setFirstLoad(false)
        }
      } );


      const onResize =()=>{
        let innerWidth = window.innerWidth;

        if(innerWidth <= 800){
           toggleMobileNav(true)
        }else{
            toggleMobileNav(false)
        }
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

            <ul  className= {show_mobile_nav_link ? "grid mobile__nav--on" : "grid mobile__nav--off"} >
                <li><img className='navbar__logo'  src={logo} alt="hadar" /></li>
                <li className="navbar__link">About</li>
                <li className="navbar__link">Projects</li>
                <li className="navbar__link">Contact</li>
            </ul>
        </nav>
    );
};


export default NavBar;