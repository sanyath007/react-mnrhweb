import React from 'react';
import Thumbnail from './Thumbnail'
import { wrap } from 'module';

const Gallery = ({ galleries }) => (
  <div className="gallery-wrap">
    <div className="gallery__header">
      <h3>Gallery</h3>

      <hr />
    </div>          

    <div className="row portfolio">
        { galleries && galleries.length
          ? galleries.map(item => (
              <div className="col-sm-6 col-md-4" key={item.id}>
                <Thumbnail item={item} />
              </div>
            ))
          : '' 
        }
    </div>
  </div>
);

export default Gallery;
