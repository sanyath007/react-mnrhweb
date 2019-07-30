import React from 'react';
import Video from './Video'

const VideoList = ({ videos }) => (
  <div className="panel panel-green">
    <div className="panel-heading">
      <i className="fa fa-film"></i> Video
    </div>
    <div className="panel-body">
      { videos.map(video => <Video key={video.id} video={video} />)}
    </div>
  </div>
);

export default VideoList;
