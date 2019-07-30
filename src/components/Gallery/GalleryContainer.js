import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './Gallery';

class GalleryContainer extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Gallery galleries={this.props.galleries} />
    );
  }
}

const mapStateToProps = state => ({ galleries: state.gallery.galleries })

export default connect(
  mapStateToProps
)(GalleryContainer);
