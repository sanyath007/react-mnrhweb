import React from 'react';
import News from './News'

const NewsList = ({ newsLists }) => (
  <div className="panel panel-green">
    <div className="panel-heading">
      <i className="fa fa-bullhorn"></i> ข่าวประชาสัมพันธ์ / กิจกรรม
    </div>
    <div className="panel-body">
      { newsLists && newsLists.length 
        ? newsLists.map(news => <News key={news.id} news={news} />)
        : 'No news...' 
      }
    </div>
  </div>
);

export default NewsList;
