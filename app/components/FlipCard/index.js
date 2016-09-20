import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import coverImage from '../../common/coverVideo/cover.jpg';

// import baseStyle from '../../common/Style/baseStyle.css';
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
          <Card>
            <CardHeader
              title="URL Avatar"
              />
            <CardMedia>
              <img src={coverImage} alt="Cover" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />

            <CardActions>
              <FlatButton label="Action1" onTouchTap={() => this.handleClick('front') } />
              <FlatButton label="Action2" onTouchTap={() => this.handleClick('front') } />
            </CardActions>
          </Card>
        </div>

        <div className={this.state.backClass} tabIndex="-1">
          <Card>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
              Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" onTouchTap={() => this.handleClick('back') } />
              <FlatButton label="Action2" onTouchTap={() => this.handleClick('back') } />
            </CardActions>
          </Card>
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
