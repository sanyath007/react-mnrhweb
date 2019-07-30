import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from './ArticleList';

class ArticleContainer extends Component {
  render() {
    return (
      <ArticleList articles={this.props.articles} />
    );
  }
}

const mapStateToProps = state => ({ articles: state.articles.articles })

export default connect(
  mapStateToProps
)(ArticleContainer);
