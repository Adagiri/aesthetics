import React from "react"
import LayoutStyles from "./Layout.module.scss"
import Footer from "./Footer"
import MapForm from "./MapForm";
import ScrollToTop from "react-scroll-up"
import Logo from "./logo.svg";
import Logo1 from "../images/a.svg"
import Toggle from "../components/Toggle"

function Layout(props) {
  return (
    <div className={LayoutStyles.layout}>
    <div className={LayoutStyles.logoToggle}>
    <div>
      <img src={Logo1} />
    </div>
    <div>
      <Toggle />
    </div>
  </div>
    <ScrollToTop style={{zIndex: 10000}} showUnder={160}>
  <img style={{width: 45, zIndex: 1000000}} src={Logo} />
</ScrollToTop>
      {props.children}
      <MapForm />
      <Footer />
    </div>
  )
}

export default Layout
