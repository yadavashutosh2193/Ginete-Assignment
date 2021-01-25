import React from 'react';
import GalleryDisc from './GalleryDisc';

const SliderIamge = (props)=>{
    return (<>
        <div className = "imagetittle">
             <p style = {{fontWeight: 'bold'}}> price: <span style = {{color: 'green'}}>{props.price.daily} &euro; Daily</span></p>
             <p style = {{fontWeight: 'bold'}}>Name: <span style = {{color: 'white'}}> {props.details.name}</span></p>
        </div>
        <div className = "container">
                {props.photourls.map((url, id)=>{
                    return <img src = {url.t} key = {id} alt = ""/>
                  {/* return <GalleryDisc photourl = {url.t} key = {id}/> */}
                })}
        </div>
    </>)
}
export default SliderIamge;