import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import ProjectsStyles from "../styles/projects.module.scss";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import Zoom from 'react-reveal/Zoom';
import Head from "../components/Head";
import { useStateValue } from '../components/StateProvider';
import Layout from '../components/Layout';


function Projects() {

    const [galleri, setGallery] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [images, setImages] = useState(['https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/gallery%2F0Gd9rGI86S4fAwfFupv8%2Ffiles?alt=media&token=a04d7cfe-35b8-4564-a1dc-596103333775', 'https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/gallery%2F1vqRq1MHcZgFxXcC87SC%2Ffiles?alt=media&token=da9f7304-0567-4b18-9d9f-5f59b1629dfd', 'https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/gallery%2F3KhQBMGrWrWUUauxweK3%2Ffiles?alt=media&token=ee4a01fc-7ffc-4345-a436-49868e05a274', 'https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/gallery%2F3qnsDZA3ZOfOOro8OyjW%2Ffiles?alt=media&token=f0a4b1e2-09e0-4911-9e35-64c74f8db186']);

    const [{gallery}, dispatch] = useStateValue();

    useEffect(() => {
     gallery.length > 0 && setImages(gallery)
      return () => {
        
      };
    }, [gallery])
    return (

        <React.Fragment>
      <Head title="Projects - Aesthetics Marble World" />
      <div className={ProjectsStyles.project}>
      {galleri && (
       <Lightbox
         mainSrc={images[photoIndex]}
         nextSrc={images[(photoIndex + 1) % images.length]}
         prevSrc={images[(photoIndex + images.length - 1) % images.length]}
         onCloseRequest={() => setGallery(false)}
         onMovePrevRequest={() =>
           setPhotoIndex((photoIndex - 1) % images.length)
         }
         onMoveNextRequest={() =>
           setPhotoIndex((photoIndex + 1) % images.length)
         }
       />
     )}
      <div className={ProjectsStyles.header}>
      <div className={ProjectsStyles.headerLeft}> <h1> <Zoom left cascade>PROJECTS</Zoom> </h1>  
      <a type="button" onClick={() => setGallery(true)}><Button text="SHOW GALLERY" /></a></div>
      <div className={ProjectsStyles.headerRight}>
      <div>  <h1><Zoom left cascade>PROJECTS </Zoom></h1> <p>OUR CREDENTIAL PAST AND CURRENT DELIVERIES</p></div>
    
      </div>
      </div>

      
      <div className={ProjectsStyles.body}>
   
      <h2><Zoom left cascade>PAST PROJECTS</Zoom></h2>
      <ul>
      <li>
      Multi project limited (supplies/installation of both indoor wall and floor tiles on their various project). Unity Bank headoffice.
      </li>
      <li>Baron Architectures (Installation of special screwed tiles at banana island project</li>
      <li>High point construction</li>
      <li>Vine Estate Ltd.</li>
      <li>Encon International Ltd</li>
      <li>Ponti and Co Italware Construction</li>
      <li>Horation Construction</li>
      <li>CSL Construction</li>
      <li>Feceng Services Ltd</li>
      <li>Locks and Switches</li>
      <li>OPIC Plaza/Event Centre Lagos Ibadan Expressway (Ogun State)</li>
      <li>Turbo Construction</li>
      <li>Cyrons Ventures (Turnkey Builder)</li>
      <li>BCL (Bussiness Contracting Limited)</li>
      <li>Numerous Private Residential, e.g Lekki, Banana Island, Parkview, Osborne Estate both Lagos and Outside (supplies and installation).</li>
      </ul>


      <h2><h2><Zoom left cascade>ONGOING PROJECTS</Zoom></h2></h2>
     <ul>
     <li>Business contraction Limited (BCL)</li>
     <li>Baron Architectures</li>
     <li>Tender Loving School</li>
     <li>Multi Project Limited</li>
     <li>Turbo Construction</li>
     <li>Feceng Services Limited</li>
     <li>Davonne Investment Limited</li>
     <li>O Spaces Limited</li>
     <li>SPYD Limited</li>
     <li>Catholic Youth Centre</li>
     <li>Banana Island Estate Site</li>
     <li>Osborne 2 Ikoyi</li>
     <li>Royal Garden Estate Ajah</li>
     <li>Banana Island</li>
     <li>Caltongate, Chevron Drive</li>
     <li>GSL Warehouse Ibadan Oyo State</li>
     <li>Corporate Villa Badore</li>
     <li>Mixed Residential Development</li>
   

     </ul>
      </div>
      </div>
        </React.Fragment>

    )
}

export default Projects;
