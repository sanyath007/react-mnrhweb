import React from 'react';

const Article = ({ article }) => (
  <div className="media">
    <div className="media-left">
      <a href="#">
        <img 
          className="media-object img-thumbnail media-img-sm" 
          src={ './img/' + article.picUrl } 
          alt="..." 
        />
      </a>
    </div>
    <div className="media-body">
      <h4 className="media-heading">
        { article.topic }
      </h4>
      <span className='text-muted'>({ article.createAt }) </span>
      { article.desc }
    </div>
  </div>
);

export default Article;
