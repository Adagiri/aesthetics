import React from 'react';
import ServicesStyles from "../styles/services.module.scss";
import Button from '../components/Button';
import Layout from "../components/Layout";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Blob from "../images/blob.svg";
import Zoom from 'react-reveal/Zoom';
import Head from "../components/Head";


function Services() {
    return (
        <Layout>
        <Head title='Services - Aesthetics Marble World' />
        <div className={ServicesStyles.services}>
        <div className={ServicesStyles.header}>
        <div className={ServicesStyles.headerLeft}> <h1> <Zoom left cascade>SERVICES</Zoom> </h1><AnchorLink href='#contactform' offset='-550px'> <Button text="CONTACT US" /></AnchorLink></div>
        <div className={ServicesStyles.headerRight}>
        <div>  <h1>     <Zoom left cascade>SERVICES </Zoom></h1> <p>OUR CORE COMPETENCE</p></div>
      
        </div>
        </div>

        <div className={ServicesStyles.body} >
     
        <ul>
        <li>Supplies of product(Marble, Granite, Vitrified and Ceramic for Divers Project)</li>
        <li>Installation Services</li>
        <li>Professional Consulting Services</li>
        <li>Project Management till Completion</li>
        <li>Project Supervision</li>
        <li>Moulding of Building Table/Tombstone, Kitchen Workshop, Counter Top and Staircases made of Marble/Granite for Banks, Hotels and Residence</li>
        <li>marble/granite design</li>
        <li>Cleansing services</li>
        <li>Swimming Pool Tiles/Mosaic Installation</li><li>Wooden Cork Floor Installation</li>
        <li>Stamped Concrete Paving</li>

        <li>POP Wall Screeding and Keeming</li>
        <li>3D flowering and Wallpaper</li><li>Waterproof Solutions</li>

        <li>Adhesive Glue (Tiles and Granites)</li><li>Graunting Cement</li>
        <li>Spacers</li>

        <li>Diamond-Blades</li>
        <li>Genesis Trims (Stainless and Plastic)</li>
        <li>Wood Carved with Mixed Glass and Granite Top.</li>
        <li>Building from Scratch</li>

        </ul>
        </div>
        </div>
        </Layout>
    )
}

export default Services
