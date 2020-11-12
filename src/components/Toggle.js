import React from 'react';
import "./Toggle.scss";
import {useState, useEffect, useRef} from 'react';
import { Link } from 'gatsby';
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
    setTimeout(() => setActiveClass(document.title))
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [document.title]);


    return (
<div ref={node}>
 <a href="#menu" onClick={() => setToggle(!toggle)} className={ toggle && "on"} id="tog"><span ></span></a>

<div id="overlayn"  className={ toggle && "on"} >
<Link onClick={() => setToggle(false)} className={active === "Aesthetics Marble World Ltd." && "active"} to="/" >Home</Link>
<Link onClick={() => setToggle(false)} className={active === "About - Aesthetics Marble World" && "active"} to="/about" >About</Link>
<Link onClick={() => setToggle(false)} className={active === "Projects - Aesthetics Marble World" && "active"} to="/projects"  >Projects</Link>
<Link onClick={() => setToggle(false)} className={active === "Services - Aesthetics Marble World" && "active"} to="/services" >Services</Link>

<a style={{background: "none", color: "black"}}><div style={{display: 'flex', justifyContent: "flexStart", alignItems: "center", width: "inherit"}}><PhoneAndroidIcon  /> <p >
0802 067 7749</p></div></a>
    
</div>

</div>

    )
}

export default Toggle;



