import React, { Component, PropTypes } from 'react';
// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import styles from './styles.css';

class FlipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontClass: styles.front,
      backClass: styles.back,
      umbraClass: styles.umbra,
      penumbraClass: styles.penumbra,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(side) {
    switch (side) {
      case 'front':
        this.setState({
          frontClass: [styles.front, styles.sideOneAnimation].join(' '),
          backClass: [styles.back, styles.sideTwoAnimation].join(' '),
        });
        break;
      case 'back':
        this.setState({
          frontClass: [styles.front, styles.sideTwoAnimation].join(' '),
          backClass: [styles.back, styles.sideOneAnimation].join(' '),
        });
        break;

      default:
        throw new Error('Unknown side');
    }
    this.setState({
      umbraClass: [styles.umbra, styles.umbraAnimation].join(' '),
      penumbraClass: [styles.penumbra, styles.penumbraAnimation].join(' '),
    });
  }
  render() {
    return (
      <div className={styles.flipCard}>
        <div className={this.state.umbraClass}></div>
        <div className={this.state.penumbraClass}></div>
        <div className={this.state.frontClass} tabIndex="-1">
          <h1>Front</h1>
          <button onClick={() => this.handleClick('front')}>Flip card</button>
        </div>

        <div className={this.state.backClass} tabIndex="-1">
          <h1>Back</h1>
          <button onClick={() => this.handleClick('back')}>Flip card</button>
        </div>
      </div>
    );
  }
}

FlipCard.propTypes = {
  axis: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default FlipCard;
