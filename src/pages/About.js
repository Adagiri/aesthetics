import React from 'react';
import Button from '../components/Button';
import AboutStyles from "../styles/about.module.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Zoom from 'react-reveal/Zoom';
import Head from "../components/Head";
import Layout from '../components/Layout';


function About() {
    return (
     
         <React.Fragment>
         <Head title="About - Aesthetics Marble World" />
         <div className={AboutStyles.about}>
         <div className={AboutStyles.header}>
         <div className={AboutStyles.headerLeft}>
         <h1> <Zoom left cascade>COMPANY</Zoom> </h1> <AnchorLink href='#contactform' offset='-550px'> <Button text="CONTACT US" /></AnchorLink></div>
         <div className={AboutStyles.headerRight}>
         <div> 
         <h1> <Zoom left cascade>COMPANY</Zoom> </h1>
      <p>OUR MISSION <span>WHO WE ARE</span></p></div>
       
         </div>
         </div>
 
         <div className={AboutStyles.body}>
        
 
         <h2> <Zoom right cascade>Mission Statement </Zoom></h2>
        
 
         <p>Whether you are an Architect, Builder, Contractor or residential home owner, our expert craftsmanship and attention to detail will bring your project to life.</p>
 
         <h2> <Zoom right cascade>About Us </Zoom></h2>
 
        
         <p>Aesthetics Marble world Ltd. is one of the top companies in Nigeria, specializing in Marble and other Natural stones procured from all over the world. It has been in existence for more than 15 years, registered and incorporated under the Nigeria Corporate Affairs Commision.
 </p>
         <p>
         At Aesthetics Marble, We create our own pattern to meet the aesthetics functional and suitable needs for the client personality, taste and client uniqueness are some of the factors we held high because we believe a project is successful if only it fulfils intended functions. We believe in the value of giving good services beyond our client expectations and aim to achieve highest standard at all time. We are not restricted by distance, we work anywhere in the country.
         </p>
         <p>We have built a reputation for the highest quality of professional services in all phases of hard tiles and marble installation in both commercial and residential applications.
         </p>
         <p>We have a proffesional team that works with each client from start to finish making the job run seamlessly. We are fully licensed and insured to comply with the strictest requirements.</p>
         <p>We pride ourselves in consistently following project schedules and standing by our guarantees. If you are remodeling or building from scratch, we will vitalize our experience on the job to handle your interior and exterior needs.
         </p>
         <p>We are fully equiped to handle all phase of marble, stores and ceramic tiles installation as well as polishing and sealing your residential or commercial needs. We are now able to provide our clients with competitive prices on all installation and supply.</p>
 
 
 
        
         </div>
         </div>
     
         </React.Fragment>
       
    )
}

export default About
