import React from 'react';

const itemNomal = 'item';
const itemActive = 'item active';

const CarouselItem = ({ item }) => (
  <div className={ item.id === 1 ? itemActive : itemNomal }>
    <img src={ './img/' + item.picUrl } />

    <div className="carousel-caption">
      <h4><a href="#">{ item.id + ' ' + item.topic }</a></h4>
      <p>
        { item.desc }
      </p>
    </div>
  </div>
);

export default CarouselItem;