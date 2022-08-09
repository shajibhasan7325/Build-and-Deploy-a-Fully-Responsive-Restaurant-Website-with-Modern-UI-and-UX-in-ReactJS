import React, { useRef, useState } from "react";
import { BsFillPlayBtnFill, BsPauseBtnFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevplayvideo) => !prevplayvideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        controls={false}
        muted
        loop
        ref={vidRef}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseBtnFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayBtnFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
