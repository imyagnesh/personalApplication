import React, { Component, PropTypes, Children } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import SwipeableViews from 'react-swipeable-views';
import IconButton from 'material-ui/IconButton';
import NavigationNext from 'material-ui/svg-icons/image/navigate-next';
import NavigationBefore from 'material-ui/svg-icons/image/navigate-before';

import baseStyle from '../../common/Style/baseStyle.css';
import styles from './styles.css';

class swipeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth, index: 0, totalChild: 0 };
    this.handleResize = this.handleResize.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.handleSwipeNext = this.handleSwipeNext.bind(this);
    this.handleSwipePrev = this.handleSwipePrev.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth, index: 0 });
  }

  handleChangeIndex(index) {
    this.setState({
      index,
    });
  }

  handleSwipeNext() {
    this.setState({
      index: this.state.index < this.state.totalChild ? this.state.index + 1 : this.state.totalChild,
    });
  }

  handleSwipePrev() {
    this.setState({
      index: this.state.index > 0 ? this.state.index - 1 : 0,
    });
  }

  render() {
    const { children } = this.props;
    let container = [];
    const getLength = () => {
      const windowWidth = this.state.windowWidth;
      if (windowWidth < 600) {
        return 1;
      }
      if (windowWidth > 600 && windowWidth < 960) {
        return 2;
      }
      if (windowWidth > 960 && windowWidth < 1280) {
        return 3;
      }
      return 4;
    };
    const childrenToRender = Children.map(children, (child, index) => {
      container = [...container, child];
      if (container.length === getLength()) {
        const divs = container;
        container = [];
        return (
          <div className={[baseStyle.content, baseStyle.fullWidth].join(' ')}>
            {divs}
          </div>
        );
      }
      if ((index + 1) === children.length && container.length > 0) {
        const divs = container;
        container = [];
        return (
          <div className={[baseStyle.content, baseStyle.fullWidth].join(' ')}>
            {divs}
          </div>
        );
      }
      return null;
    });

    const navButton = () => {
      if (this.state.totalChild > 0) {
        return (
          <div>
            <IconButton onTouchTap={this.handleSwipePrev} className={[styles.button, styles.prev].join(' ')}>
              <NavigationBefore />
            </IconButton>
            <IconButton onTouchTap={this.handleSwipeNext} className={[styles.button, styles.next].join(' ')}>
              <NavigationNext />
            </IconButton>
          </div>
        );
      }
      return null;
    };

    this.state.totalChild = (childrenToRender.length - 1);

    return (
      <div className={styles.relative}>
        {navButton()}
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          {childrenToRender}
        </SwipeableViews>
      </div>
    );
  }
}

swipeWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};


export default swipeWrapper;
