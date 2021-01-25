import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {FetchImages} from './Redux/Action/Action';
import SliderIamge from './SliderImage';

function Gallery ({links, FetchImages}){
  const [Imageurl, setImageurl] = useState([]);
  useEffect(()=>{
    FetchImages();
  },[])
   console.log(links);
  useEffect(()=>{
    links.forEach((element)=>{
          element.photos.forEach(url=>{
            Imageurl.push(url.t);
            setImageurl(Imageurl);
          })
    })
  })
    return (
      <div>
      {
        links.map((element, id)=>{
          return <SliderIamge photourls = {element.photos} price = {element.price} details = {element.details} key = {id}/>
        })
      }
      </div>
    )
}

const MapStateToProps = state => {
  return {
    links: state.ImageLinkArray
  }
}
const mapDispatchToProps = dispatch => {
  return {
    FetchImages: () => dispatch(FetchImages())
  }
}
export default connect(MapStateToProps, mapDispatchToProps)(Gallery);