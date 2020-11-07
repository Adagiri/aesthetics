import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import HomeStyles from "../styles/index.module.scss"
import "../styles/index.css"
import ImageGallery from "react-image-gallery"
import "../styles/samples.scss"
import Button1 from "../components/Button1"
import Button from "../components/Button"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Head from "../components/Head";
import { useStateValue } from '../components/StateProvider';
import Layout from "../components/Layout"



function Home() {

  const [service, setServices] = useState([
    {
src: "https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/services%2Fjeg2LXIfiIzxcdG8r4xq%2Ffiles?alt=media&token=fca55ec4-0b0d-4ef3-8fe7-f61b129e7a11",

title: "Supply and Installation of marble"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/services%2FpFbWTnCrAmLCZ9rkdQ6q%2Ffiles?alt=media&token=ed6f0af8-d7b6-4a8c-8bfe-8f5e82f9e0f1",

      title: "Building and Renovation"
    }
  ])


  const [marble, setMarbles] = useState([
    {
      original: "https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/marbles%2F5zP3OEOrWdw3qbGiddJx%2Ffiles?alt=media&token=4543145d-8be1-4c65-b692-c316db48938d",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/marbles%2F5zP3OEOrWdw3qbGiddJx%2Ffiles?alt=media&token=4543145d-8be1-4c65-b692-c316db48938d",
      description: "marble",
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/marbles%2FM9iBUsxMNbbVNdyUqjyE%2Ffiles?alt=media&token=f1fafd22-086b-4561-954a-c06007dff871",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/aestheticsmarbleworld.appspot.com/o/marbles%2FM9iBUsxMNbbVNdyUqjyE%2Ffiles?alt=media&token=f1fafd22-086b-4561-954a-c06007dff871",
      description: "marble",
    }
  ]);

  const [{marbles, services}, dispatch] = useStateValue();


  useEffect(() => {

   marbles.length > 0 && setMarbles(marbles)

    services.length > 0 && setServices(services)
    return () => {
      
    };
  }, [services, marbles])


  return (
    <React.Fragment>
    <Head title="Aesthetics Marble World" />
      <div className={HomeStyles.home}>
        <div className={HomeStyles.main}>
          <div className={HomeStyles.mainLeft}>
           
            <div className={HomeStyles.mainLeftTop}>
              <div className={HomeStyles.tag}>
                <p className={HomeStyles.aesthetics}> <Zoom left big cascade>AESTHETICS </Zoom></p>
                <p className={HomeStyles.marble}><Zoom right big cascade>MARBLE </Zoom></p>
                <p className={HomeStyles.world}><Zoom left big cascade>WORLD</Zoom></p>
              </div>
              <p className={HomeStyles.slogan}>
                No job too big. No job too small.
              </p>
              <div className={HomeStyles.contact}>
                <AnchorLink href='#contactform' offset='-550px'> <Button text="CONTACT US" /></AnchorLink>

              </div>
            </div>
          </div>
          <div className={HomeStyles.mainRight}>
          <div  className={HomeStyles.overlay}></div>
          <div className="slide-container">
      <Fade duration= {3000}
      arrows={false}
      >

      {
        service.map((service) => (
          <div style={{position: "relative"}} className="each-fade">
          <div className="image-container">
            <img className="slide-main-img"  src={service.src} />
          </div>
          <h2 className="slide-main-text" >{service.title}</h2>
        </div>
        ))
      }
        
       
      </Fade>
    </div>
          </div>

          <div></div>
        </div>
        <div className={HomeStyles.about}>
        <Slide left big text cascade>
          <div className={HomeStyles.aboutLeft}>       
          <p className={HomeStyles.aboutHead}>WHO WE ARE</p>
          <h2> No job too big. No job too small.</h2>
          <div className={HomeStyles.aboutLine}></div>
          <Link to="/about">
            <Button1 text="LEARN MORE" />
          </Link>

          </div>
          </Slide>

          <Slide right big text cascade>
          <div className={HomeStyles.aboutRight}>
          <p className={HomeStyles.aboutRightThick}>
            We are a construction company specializing in Marble and other
            Natural stones procured from all over the world.{" "}
          </p>

          <p>
            As a reputable company, we value & place much importance in the
            quality of our products. With the use and implementation of modern
            technologies & design, we adopt new production techniques. The
            creativity & design ability of our team is outstanding.
          </p>
        </div>
          </Slide>
        
        </div>

        <div className={HomeStyles.quality}>
        <Slide left big text cascade>
        <div className={HomeStyles.qualityLeft}>
            <p className={HomeStyles.qualityHead}>QUALITY & PRECISION</p>
            <h2> WE WILL TURN YOUR DREAM TO REALITY</h2>
            <div className={HomeStyles.qualityLine}></div>
            <p className={HomeStyles.qualityContent}>
              Our marbles come in a variety of colours and textures to bring
              that perfect look to your interiors & exteriors. They also include
              quartz, granites, onyx and others.
            </p>
          </div>
        </Slide>

      
        <div className={HomeStyles.qualityGallery}>
            {" "}
            <ImageGallery
              items={marble}
              showPlayButton={false}
              showThumbnails={false}
              showNav={true}
              showFullscreenButton={false}
              showIndex={false}
              additionalClass="qualityadditional"
              autoPlay={true}
            />{" "}
          </div>
       

          
        </div>

      </div>
       </React.Fragment>

  )
}

export default Home
