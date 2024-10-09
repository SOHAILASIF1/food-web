import React, { useState, useRef, useEffect } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  useEffect(() => {
    const handlePlayPause = () => {
      if (vidRef.current) {
        if (playVideo) {
          vidRef.current.pause();
        } else {
          vidRef.current.play();
        }
      }
    };

    handlePlayPause();
  }, [playVideo]);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
  };

  return (
    <div className='app-video'>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className="app-video-overlay flex__center">
        <div className="app-video-overlay-circle flex__center" onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30}/>
          ): <BsFillPlayFill/>}
        </div>
      </div>
    </div>
  );
};

export default Intro;
