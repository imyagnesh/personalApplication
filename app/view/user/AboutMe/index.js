import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { aboutActions } from '../../../actions';
import CoverImg from '../../../components/coverImg/index';
import InstaSection from '../../../components/AboutInstaSection/index';
import TweeterSection from '../../../components/AboutTweeterSection/index';
import PosterImg from '../../../common/coverVideo/cover.jpg';
import messages from './messages';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instaImages: props.instaImages,
      tweets: props.tweets
    };
  }
  componentWillMount() {
    this
      .props
      .actions
      .loadInstaImages();
    this
      .props
      .actions
      .loadTweets();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ instaImages: nextProps.instaImages, tweets: nextProps.tweets });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <div>
        <CoverImg
          PosterImg={PosterImg}
          headerText={messages.headerText}
          subHeaderText={messages.subHeaderText}
        />
        < InstaSection instaImages={this.state.instaImages} />
        <TweeterSection tweets={this.state.tweets} />
      </div>
    );
  }
}

AboutMe.propTypes = {
  pathname: PropTypes.string.isRequired,
  instaImages: PropTypes.array.isRequired,
  tweets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({ pathname: ownProps.location.pathname, instaImages: state.instaImages, tweets: state.tweets });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(aboutActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
