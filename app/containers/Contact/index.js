import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CoverImg from '../../components/coverImg/index';
import GoogleMap from '../../components/Map/index';
import PosterImg from '../../common/coverVideo/cover.jpg';
import messages from './messages';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageId: props.languageId,
      markers: [{
        position: {
          lat: 12.849830,
          lng: 77.646654,
        },
        key: 'Bangalore',
        defaultAnimation: 2,
      }],
    };
  }

  render() {
    return (
      <div>
        <CoverImg
          PosterImg={PosterImg}
          headerText={messages.headerText}
          subHeaderText={messages.subHeaderText}
        />
        <GoogleMap
          markers={this.state.markers}
          languageId={this.state.languageId}
        />
      </div>
    );
  }
}

Contact.propTypes = {
  pathname: PropTypes.string.isRequired,
  languageId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
  languageId: state.locale,
});

export default connect(mapStateToProps)(Contact);
