import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import HomeStyles from "../styles/index.module.scss"
import "../styles/index.css"
import ImageGallery from "react-image-gallery"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { IconButton } from "@material-ui/core"
import "../styles/samples.scss"
import Button1 from "../components/Button1"
import Button from "../components/Button"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';
import Head from "../components/Head";



 
const fadeImages = [
  'https://picsum.photos/id/1018/1000/600/',
  'https://picsum.photos/id/1015/1000/600/',
  'https://picsum.photos/id/1018/1000/600/'
];
 

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description: "First Image",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    description: "Second Test Image",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    description: "Third test graphic",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description: "First Image",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    description: "Second Test Image",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    description: "Third test graphic",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description: "First Image",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    description: "Second Test Image",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    description: "Third test graphic",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    description: "First Image",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    description: "Second Test Image",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    description: "Third test graphic",
  },
]

function renderLeft(onClick, disabled) {
  return (
    <div className="arr-cover">
      <IconButton
        className="image-gallery-custom-left-nav arr-border"
        disabled={disabled}
        onClick={onClick}
      >
        <ArrowBackIcon className="icon-material" />
      </IconButton>
    </div>
  )
}

function renderRight(onClick, disabled) {
  return (
    <div className="arr-cover1">
      <IconButton
        className="image-gallery-custom-right-nav arr-border"
        disabled={disabled}
        onClick={onClick}
      >
        <ArrowForwardIcon className="icon-material" />
      </IconButton>
    </div>
  )
}

function renderLeftNav(onClick, disabled) {
  return (
    <div className="arrow-cover">
      <IconButton
        className="image-gallery-custom-left-nav arrow-border"
        disabled={disabled}
        onClick={onClick}
      >
        <ArrowBackIcon className="icon-material" />
      </IconButton>
    </div>
  )
}

function renderRightNav(onClick, disabled) {
  return (
    <div className="arrow-cover1">
      <IconButton
        className="image-gallery-custom-right-nav arrow-border"
        disabled={disabled}
        onClick={onClick}
      >
        <ArrowForwardIcon className="icon-material" />
      </IconButton>
    </div>
  )
}

function renderLeftQuality(onClick, disabled) {
  return (
    <div className="arow-cover">
      <IconButton
        className="image-gallery-custom-left-nav arow-border"
        disabled={disabled}
        onClick={onClick}
      >
        <ArrowBackIcon className="icon-material1" />
      </IconButton>
    </div>
  )
}

function renderRightQuality(onClick, disabled) {
  return (
    <div className="arow-cover1">
      <IconButton
        className="image-gallery-custom-right-nav arow-border"
        disabled={disabled}
        onClick={onClick}
      >
        <ArrowForwardIcon className="icon-material1" />
      </IconButton>
    </div>
  )
}

function Home() {
  return (
    <Layout>
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
        <div style={{position: "relative"}} className="each-fade">
          <div className="image-container">
            <img className="slide-main-img"  src={fadeImages[0]} />
          </div>
          <h2 className="slide-main-text" >First Slide</h2>
        </div>
        <div  style={{position: "relative"}} className="each-fade">
          <div className="image-container">
            <img className="slide-main-img" src={fadeImages[1]} />
          </div>
          <h2 className="slide-main-text">Second Slide</h2>
        </div>
        <div  style={{position: "relative"}} className="each-fade">
          <div className="image-container">
            <img className="slide-main-img" src={fadeImages[2]} />
          </div>
          <h2 className="slide-main-text">Third Slide</h2>
        </div>
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

        <Pulse>
        <div className={HomeStyles.qualityGallery}>
            {" "}
            <ImageGallery
              items={images}
              showPlayButton={false}
              showThumbnails={false}
              showNav={true}
              showFullscreenButton={false}
              showIndex={false}
              additionalClass="qualityadditional"
            />{" "}
          </div>
        </Pulse>

          
        </div>

        <div className={HomeStyles.project}>
          <div className={HomeStyles.projectCover}>
            {" "}
            <div className={HomeStyles.projectHeading}>
              {" "}
              <h2>
              <Zoom left big cascade>
              PROJECTS
              </Zoom>
              </h2>
            <p><Zoom left big cascade> Here are our most recent works</Zoom></p>
              
            </div>
            <div className={HomeStyles.lineCover}>
              {" "}
              <div className={HomeStyles.line}></div>
            </div>
            <div  className={HomeStyles.slides}>
              <ImageGallery
                items={images}
                showPlayButton={false}
                thumbnailPosition="bottom"
                showNav={true}
                showThumbnails={false}
                showFullscreenButton={false}
                //      renderRightNav={renderRightNav}
                // renderLeftNav={renderLeftNav}
                additionalClass="additional"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
