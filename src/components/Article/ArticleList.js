import React from 'react';
import { connect } from 'react-redux';
import Article from './Article'

const ArticleList = ({ articles }) => (
  <div className="panel panel-green">
    <div className="panel-heading">
    <i className="fa fa-stethoscope"></i> เกร็ดความรู้
    </div>
    <div className="panel-body">
        { articles && articles.length
          ? articles.map(a => (
              <div className="col-sm-6" key={a.id} style={{ marginBottom: 20 }}>
                <Article article={a} />
              </div>
            ))
          : 'No article...' 
        }
    </div>
  </div>
);

const mapStateToProps = state => ({ articles: state.articles.articles });

export default connect(
  mapStateToProps
)(ArticleList);
