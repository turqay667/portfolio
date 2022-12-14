import Home from "./Home";
import React, { useState } from "react";
import {FaBars} from "react-icons/fa"
import {MdClose} from "react-icons/md"
const Header=()=>{
const [isMobile,setIsMobile]=useState(false)
return(
    <>
    <section className="navd">
    <nav className="navbar">
        <a className="logo">
          <img src="logo.png"/>
        </a>
     
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setIsMobile(false)}>
            <li><a href="#">Home</a></li>
         <li> <a href="#about" >About</a></li>  
          <li><a href="#services">Service</a></li>  
            <li><a href="#portfolio">Portfolio</a></li>
            {/* <li><a>Blog</a></li> */}
            <li ><a href="#contact">Contact</a></li>
           
        </ul>
        <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>  
                {isMobile ? (
                  <MdClose/>
                ): (
                   <FaBars/>
                )}
            </button>

        {/* <div className="burger-menu">

        </div> */}
       
    </nav>
     <Home/>
     </section>
     </>
)
}
export default Header;