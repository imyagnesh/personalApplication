import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CoverImg from '../../components/coverImg/index';
import PosterImg from '../../common/coverVideo/cover.jpg';
import messages from './messages';

import SkillsSection from '../../components/ResumeSkillSection/index';
import EducationSection from '../../components/ResumeEducationSection/index';
import ExperianceSection from '../../components/ResumeExperianceSection/index';
import ContactSection from '../../components/HomeContactSection/index';
import CertificationSection from '../../components/ResumeCertificationSection/index';


class Resume extends Component {
  render() {
    return (
      <div>
        <CoverImg
          PosterImg={PosterImg}
          headerText={messages.headerText}
          subHeaderText={messages.subHeaderText}
        />
        <SkillsSection />
        <ContactSection content="Is my skills suitable for your project?" buttonLabel="Hire me" />
        <ExperianceSection />
        <ContactSection content="Want to know more about My work?" buttonLabel="Contact Me" />
        <CertificationSection />
        <ContactSection content="Want to know more about My work?" buttonLabel="Contact Me" />
        <EducationSection />
      </div>
    );
  }
}

Resume.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
});

export default connect(mapStateToProps)(Resume);
