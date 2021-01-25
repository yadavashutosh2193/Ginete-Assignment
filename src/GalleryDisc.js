import React from 'react';
import './App.css';
const GalleryDisc = (props)=>{
    return (
        <div class="gallery">
      <a target="_blank" href="img_5terre.jpg">
       <img src= {props.photourl} alt="Cinque Terre"/>
      </a>
     <div class="desc">Add a description of the image here</div>
    </div>
    )
}
export default GalleryDisc;