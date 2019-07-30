import React from 'react';
import NewsContainer from '../News/NewsContainer';
import VideoContainer from '../Video/VideoContainer';
import ArticleContainer from '../Article/ArticleContainer';
import GalleryContainer from '../Gallery/GalleryContainer';

const LeftContent = ({ item }) => (
  <div className="col-md-9">
    <NewsContainer />

    <VideoContainer />

    <ArticleContainer />

    <GalleryContainer />
  </div>
);

export default LeftContent;
