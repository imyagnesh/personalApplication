import React, { Component, PropTypes } from 'react';

class scrollWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    if (this.props.onWindowScroll) window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    if (this.props.onWindowScroll) window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // Call the passed-in prop
    // Call the passed-in prop
    if (this.props.onWindowScroll) this.props.onWindowScroll(event);
  }

  render() {
    return this.props.children;
  }
}

scrollWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  onWindowScroll: PropTypes.func.isRequired,
};

export default scrollWrapper;
