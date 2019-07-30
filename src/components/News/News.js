import React from 'react';

const News = ({ news }) => (
  <div className="col-sm-4">
    <div className="news">
        <div className="img-figure">
            {/* <!-- <div className="cat">fashion</div> --> */}
            <img src="./img/news01_thumbnail.jpg" className="img-responsive" />
        </div>

        <div className="title">
            <h1>The start of the web and web design</h1>
        </div>
        <p className="description">
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden...
        </p>

        <p className="more">
            <a href="#">read more</a><i className="fa fa-angle-right" aria-hidden="true"></i>
        </p>
    </div>
  </div>
);

export default News;
