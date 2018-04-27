import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem onSelect={props.onSelect} key={video.title} video={video} />
    );

  });

  return (
    <div className="video-list-wrap">
      <h2 className="videos-title">Top 5 Videos {props.categName}</h2>
      <div className="videos">
        {videoItems}
      </div>
    </div>
  );
}

export default VideoList;
