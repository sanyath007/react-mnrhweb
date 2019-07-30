import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoList from './VideoList';

class VideoContainer extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <VideoList videos={this.props.videos} />
    );
  }
}

const mapStateToProps = state => ({ videos: state.videos.videos })

export default connect(
  mapStateToProps
)(VideoContainer);
