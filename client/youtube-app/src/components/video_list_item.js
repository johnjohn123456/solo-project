import React from 'react';

const VideoListItem = (props) => {
  const imageUrl = props.video.snippet.thumbnails.medium.url

  return (
    <div onClick={() => props.onSelect(props.video)} className="video">
      <div className="img-ctx"><img src={imageUrl}/></div>
      <div className="title-ctx"><p>{props.video.snippet.title}</p></div>
    </div>
  )
};

export default VideoListItem;
