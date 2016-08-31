import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CoverImg from '../../components/coverImg/index';
import PosterImg from '../../common/coverVideo/cover.jpg';
import messages from './messages';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <CoverImg
          PosterImg={PosterImg}
          headerText={messages.headerText}
          subHeaderText={messages.subHeaderText}
        />
      </div>
    );
  }
}

AboutMe.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
});

export default connect(mapStateToProps)(AboutMe);