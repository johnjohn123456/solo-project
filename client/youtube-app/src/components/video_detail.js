import React from 'react';
import '../App.css'
import logo from '../loading-gif-transparent-4.gif'

const VideoDetail = (props) => {
  if (!props.video) {
    return <div className="prev-video"><img src={logo}/></div>
  }

  const videoId = props.video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="videoDisplay">
      <div className="portait">
        <iframe 
        frameborder='1' 
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen" 
        src={url}>
        </iframe>
      </div>
    </div>
  );
};

export default VideoDetail;