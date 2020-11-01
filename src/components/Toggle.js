import React from 'react';
import "./Toggle.scss";
import {useState, useEffect, useRef} from 'react';
import { Link } from 'gatsby';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

function Toggle() {


  const node = useRef();

  const [toggle, setToggle] = useState(false);


  const handleClick = e => {
    if (node.current.contains(e.target)) {
     
      return;
    }

    setToggle(false);
  };

  const [active, setActiveClass] = useState("home");

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    setTimeout(() => setActiveClass(document.title), 300)
    console.log(document.title)
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

     

    return (
<div ref={node}>
 <a href="#menu" onClick={() => setToggle(!toggle)} className={ toggle && "on"} id="tog"><span ></span></a>

<div id="overlayn" className={ toggle && "on"} >
<Link className={active === "Aesthetics Marble World" && "active"} to="/" >Home</Link>
<Link className={active === "About - Aesthetics Marble World" && "active"} to="/about" >About</Link>
<Link className={active === "Projects - Aesthetics Marble World" && "active"} to="/projects"  >Projects</Link>
<Link  className={active === "Services - Aesthetics Marble World" && "active"} to="/services" >Services</Link>

<a style={{background: "none", color: "black"}}><div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}><PhoneAndroidIcon  /> <p >
0803 729 6906</p></div></a>
    
</div>

</div>

    )
}

export default Toggle;


