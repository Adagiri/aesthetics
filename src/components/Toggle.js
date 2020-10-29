import React from 'react';
import "./Toggle.scss";
import {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

function Toggle() {

    const [toggle, setToggle] = useState(false)

      const [active, setActiveClass] = useState("home")

      useEffect(() => {
        console.log(window.location);
          return () => {
         
          }
      }, [])

    return (
<div>
 <a href="#menu" onClick={() => setToggle(!toggle)} className={ toggle && "on"} id="tog"><span ></span></a>

<div id="overlayn" className={ toggle && "on"} >
<Link className={active === "home" && "active"} to="/"  onClick={() => setActiveClass("home")}>Home</Link>
<Link className={active === "about" && "active"} to="/about" onClick={() => setActiveClass("about")}>About</Link>
<Link className={active === "projects" && "active"} to="/projects"  onClick={() => setActiveClass("projects")}>Projects</Link>
<Link onClick={() => setActiveClass("projects")} className={active === "services" && "active"} to="/services" >Services</Link>

<a style={{background: "none", color: "black"}}><div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}><PhoneAndroidIcon  /> <p >
0803 729 6906</p></div></a>
    
</div>

</div>

    )
}

export default Toggle;


// { window.innerWidth <" 1000" &&
// <IconButton className="togglerr" onClick={() => setToggle(false)}><CloseIcon style={{color: "white"}} /></IconButton>}


