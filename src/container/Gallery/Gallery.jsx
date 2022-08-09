import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Gallery.css";

const gallaryImages=[images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef=useRef(null);
  const scroll=(direction)=>{
    const {current}=scrollRef
    if(direction ==="left" ){
      current.scrollLeft -=300
    }else{
      current.scrollRight +=300
    }
  }
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__openSans" style={{ color: "#AAAAAA" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          Visit Us
        </button>
      </div>

      <div className="app__gallery_images">
    <div  className="app__gallery_images_container" ref={scrollRef}>
    {
      gallaryImages.map((img, index)=>
      <div className="app__gallery_images_card flex__center" key={`images ${index}+1`}>
        <img src={img} alt="images" />
        <BsInstagram className="gallery__image-icon" />
         </div>
      )
    }
    </div>
    <div className="app__gallery_images_arrows">
<BsArrowLeftShort className="gallery__arrow_icon" onClick={()=>scroll("left")}/>
<BsArrowRightShort className="gallery__arrow_icon" onClick={()=>scroll("right")}/>
    </div>
      </div>
    </div>
  );
};

export default Gallery;
