import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CoverVideo from '../../components/coverVideo/index';
import PosterVideoMp4 from '../../common/coverVideo/cover.mp4';
import PosterVideoWebm from '../../common/coverVideo/cover.webm';
import PosterImg from '../../common/coverVideo/cover.jpg';
import Divider from 'material-ui/Divider';

import messages from './messages';

import QualitySection from '../../components/HomeQaulitySection/index';
import AboutSection from '../../components/HomeAboutSection/index';


class Home extends Component {
  render() {
    return (
      <div>
        <CoverVideo
          PosterImg={PosterImg}
          PosterVideoWebm={PosterVideoWebm}
          PosterVideoMp4={PosterVideoMp4}
          headerText={messages.headerText}
          subHeaderText={messages.subHeaderText}
          headerButtonText={messages.headerButtonText}
        />
        <QualitySection />
        <Divider />
        <AboutSection />
      </div>
    );
  }
}

Home.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
});

export default connect(mapStateToProps)(Home);
