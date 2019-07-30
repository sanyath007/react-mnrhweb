import React from 'react';

const Video = ({ video }) => (
  <div className="col-md-6">
    <iframe width="100%" height="330" src={video.url} frameBorder="0" allowFullScreen></iframe>
  </div>
);

export default Video;
