import React from 'react';

const VideoListItem = (props) => {
  const imageUrl = props.video.snippet.thumbnails.medium.url

  return (
    <li onClick={() => props.onSelect(props.video)}>
        <div className="img-title">
          <div className="img-ctx"><img src={imageUrl}/></div>
           <div className="title-ctx"><p>{props.video.snippet.title}</p></div>
        </div>
    </li>
  )  
};

export default VideoListItem;