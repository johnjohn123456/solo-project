import React from 'react';
import '../style/App.css'
import logo from '../img/loading-gif-transparent-4.gif'

const VideoDetail = (props) => {
  if (!props.video) {
    return <div className="prev-video"><img src={logo}/></div>
  }

  const videoId = props.video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
      <div className="wrap-player">
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
  );
};

export default VideoDetail;
