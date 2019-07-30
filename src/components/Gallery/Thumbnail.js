import React from 'react';

const Thumbnail = ({ item }) => (
  <div className="thumbnail">
    <img 
      className="img-responsive" 
      src={item.picUrl} 
      alt={item.alt} 
      data-toggle="modal" 
      data-target="#myModal"
    />
    <div className="caption">
      <p className="btn btn-default btn-xs btn-lg pull-right" rel="tooltip">
        <i className="fa fa-heart"></i>
        <i className="fa fa-heart"></i>
        <i className="fa fa-heart"></i>
        <i className="fa fa-heart-o"></i>
        <i className="fa fa-heart-o"></i>
      </p>
      <div className="clearfix"></div>
    </div>
  </div>
);

export default Thumbnail;
