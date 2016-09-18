import React, { Component, PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import shallowCompare from 'react-addons-shallow-compare';

import { redA200 } from 'material-ui/styles/colors';

import baseStyle from '../../common/Style/baseStyle.css';
import styles from './styles.css';

class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.progress = this.progress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearTimeout(this.timer);
  }

  progress() {
    if (this.state.completed !== this.props.value) {
      this.setState({ completed: (this.state.completed + 1) });
      this.timer = setTimeout(this.progress, 10);
    }
  }

  handleScroll() {
    const hT = document.getElementById('skillsSection').offsetTop;
    const hH = document.getElementById('skillsSection').offsetHeight;
    const wH = window.innerHeight;
    const wS = window.pageYOffset;
    if (this.state.completed !== this.props.value && wS > ((hT + hH) - wH)) {
      this.timer = setTimeout(this.progress, 10);
    }
  }

  render() {
    return (
      <div className={[baseStyle.column, styles.wrapper].join(' ')}>
        <div className={[baseStyle.row, baseStyle.alignSpaceBetween].join(' ')}>
          <p>{this.props.skillName}</p>
          <p>{this.state.completed}%</p>
        </div>
        <LinearProgress mode="determinate" color={redA200} value={this.state.completed} />
      </div>
    );
  }
}

componentName.propTypes = {
  skillName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default componentName;
