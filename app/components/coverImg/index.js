import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import ScrollWrapper from '../../containers/ScrollWrapper/index';
import style from './styles.css';

class posterImg extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shrinkStyle: {},
    };
    this.onScrollAnimation = this.onScrollAnimation.bind(this);
  }
  onScrollAnimation() {
    if (this.onScrollAnimation) {
      if (window.pageYOffset > 50) {
        this.setState({ shrinkStyle: { minHeight: '64px' } });
      } else {
        this.setState({ shrinkStyle: {} });
      }
    }
  }
  render() {
    return (
      <ScrollWrapper onWindowScroll={this.onScrollAnimation}>
        <div className={style.posterWrapper} style={this.state.shrinkStyle}>
          <div className={style.headerWraper}>
            <h1 className={style.headerTitle}><FormattedMessage {...this.props.headerText} /></h1>
            <h2 className={style.headerSubTitle}><FormattedMessage {...this.props.subHeaderText} /></h2>
          </div>
          <img className={style.posterImg} src={this.props.PosterImg} alt={<FormattedMessage {...this.props.headerText} />} />
        </div>
      </ScrollWrapper>
    );
  }
}

posterImg.propTypes = {
  PosterImg: PropTypes.string.isRequired,
  headerText: PropTypes.object.isRequired,
  subHeaderText: PropTypes.object.isRequired,
};

export default posterImg;
