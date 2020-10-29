import React from 'react';
import "./Project.css";
import ProjectStyles from "./Project.scss";
import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function renderLeftNav(onClick, disabled) {
    return (
      <button
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick}>
  Previous
        </button>
    )
  }

function Projects() {
    return (
        <div className={ProjectStyles.projectsi}>
     <div className={ProjectStyles.projectHeading}> <h2>PRO<span>JECTS</span></h2>
     <p>Below are some of our past and recent projects </p></div>
     <div className={ProjectStyles.line}></div>

     <div className={ProjectStyles.gallery}>
     <ImageGallery showThumbnails={false} items={images} renderLeftNav={renderLeftNav} />
     
     </div>
     </div>
    )
}

export default Projects
