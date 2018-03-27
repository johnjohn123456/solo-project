import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <div className="ctx-select">
        <VideoListItem onSelect={props.onSelect} key={video.title} video={video} />
      </div>
    );

  });

  return (
    <div className="video-list-w">
    <h2 className="videos-title">Top 5 Videos {props.categName}</h2>
    <ul>
    {videoItems}
    </ul>
    </div>
  );
}

export default VideoList;