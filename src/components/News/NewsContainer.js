import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsList from './NewsList';

class NewsContainer extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <NewsList newsLists={this.props.newsLists} />
    );
  }
}

const mapStateToProps = state => ({ newsLists: state.news.newsLists })

export default connect(
  mapStateToProps
)(NewsContainer);
