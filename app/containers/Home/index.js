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
import ContactSection from '../../components/HomeContactSection/index';
import SkillsSection from '../../components/HomeSkillsSection/index';
import PortfolioSection from '../../components/HomePortfolioSection/index';
import BlogSection from '../../components/HomeBlogSection/index';


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
        <ContactSection content="Get a website that looks amazing and actually works." buttonLabel="Find out how" />
        <SkillsSection />
        <ContactSection content="Is my skills suitable for your project?" buttonLabel="Hire me" />
        <PortfolioSection />
        <ContactSection content="Contact me to know more about My work as full stack developer." buttonLabel="Contact Me" />
        <BlogSection />
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
