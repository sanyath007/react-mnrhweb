import React from 'react';
import CarouselItem from './CarouselItem'

const Carousel = ({ items }) => (
  <div className="carousel__wrapper">
    <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{ height: 400 }}>
      {/* <!-- Slide img --> */}
      <div className="carousel-inner">
        { items.map(item => <CarouselItem key={item.id} item={item} />) }
      </div>
      {/* <!-- Slide img --> */}
      
      {/* <!-- Slide list --> */}
      <ul className="list-group col-sm-4" style={{ height: 400, backgroundColor: '#fff' }}>
        {
          items.map(item => (
            <li data-target="#myCarousel" data-slide-to={item.id} key={item.id} className="list-group-item active">
              <h4>{ item.id + ' ' + item.topic }</h4>
            </li>
          ))
        }
      </ul>
      {/* <!-- Slide list --> */}

      {/* <!-- Controls --> */}
      <div className="carousel-controls">
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
      {/* <!-- Controls --> */}
    </div>
  </div>
);

export default Carousel;