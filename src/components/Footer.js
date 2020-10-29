import React from "react"
import FooterStyles from "./Footer.module.scss"
import Logo from "../images/a.svg"
import Mail from "../images/mail.svg"
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Map from './Map';

function Footer() {
  return (
    <div className={FooterStyles.footer}>
      <div>
        <img className={FooterStyles.logo} src={Logo} />
      </div>

      <div className={FooterStyles.phone}>
        <p> 0803 376 9004</p>
        <p> 0802 067 7749</p>
      </div>

      <div className={FooterStyles.email}>info@aestheticsmarble.com</div>

      <div className={FooterStyles.line}></div>

      <div className={FooterStyles.social}>
        <a
          href="https://www.instagram.com/aestheticsmarbleworld/"
          target="_blank"
        >
          <img src={Instagram} />
        </a>{" "}
        <a href="mailto:aestheticsmarbleworldltd@gmail.com" target="_blank">
        <img src={Mail} />
      </a>{" "}
        <a
          target="_blank"
          href="https://web.facebook.com/Aesthetics-Marble-World-2055308017872067/"
        ><img src={Facebook} />
        </a>
        {" "}
      </div>

      <div className={FooterStyles.copyright}>
        © 2020 aesthetics marble. All Rights Reserved.
      </div>

      <div className={FooterStyles.developed}>
        powered by <a href="https://adagiri.web.app">adagiri</a>
      </div>
    </div>
  )
}

export default Footer;
