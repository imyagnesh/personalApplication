import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class scrollWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { UpdateBackground: false };
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 160) {
      this.setState({ UpdateBackground: true });
    }
    else {
      this.setState({ UpdateBackground: false });
    }
  }

  render() {
    return React.cloneElement(this.props.children, { UpdateBackground: this.state.UpdateBackground });
  }
}

scrollWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default scrollWrapper;
