import React, { Component, PropTypes, Children } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import SwipeableViews from 'react-swipeable-views';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationNext from 'material-ui/svg-icons/image/navigate-next';
import NavigationBefore from 'material-ui/svg-icons/image/navigate-before';

import baseStyle from '../../common/Style/baseStyle.css';
import styles from './styles.css';

class swipeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth, index: 0 };
    this.handleSwipe = this.handleSwipe.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.handleChangeTabs = this.handleChangeTabs.bind(this);
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
  handleSwipe(swipeDirection, totalChild) {
    if (swipeDirection === 'prev') {
      this.setState({
        index: this.state.index > 0 ? this.state.index - 1 : 0,
      });
    } else {
      this.setState({
        index: this.state.index < (totalChild - 1) ? this.state.index + 1 : (totalChild - 1),
      });
    }
  }
  handleChangeTabs(value) {
    this.setState({
      index: value,
    });
  }
  render() {
    const { children } = this.props;
    let container = [];
    const getLength = () => {
      const windowWidth = this.state.windowWidth;
      const minWidth = this.props.minWidth;
      if (windowWidth > minWidth) {
        return Math.floor(windowWidth / minWidth);
      }
      return 1;
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

    const tabsToRender = (() =>
      <div className={[baseStyle.row, baseStyle.alignCenterCenter].join(' ')}>
        {
          Children.map(children, (child, index) => {
            if (this.state.index === (index)) {
              return (
                <RaisedButton onClick={() => this.handleChangeTabs(index)} labelStyle={{ paddingLeft: '14px', paddingRight: '14px' }} label={child.props.label} secondary />
              );
            }
            return (
              <FlatButton onClick={() => this.handleChangeTabs(index)} labelStyle={{ paddingLeft: '14px', paddingRight: '14px' }} label={child.props.label} />
            );
          })
        }
      </div>
    );

    const navButton = () => {
      if (children.length > 0) {
        return (
          <div>
            <IconButton onTouchTap={() => this.handleSwipe('prev', children.length)} className={[styles.button, styles.prev].join(' ')}>
              <NavigationBefore />
            </IconButton>
            <IconButton onTouchTap={() => this.handleSwipe('next', children.length)} className={[styles.button, styles.next].join(' ')}>
              <NavigationNext />
            </IconButton>
          </div>
        );
      }
      return null;
    };
    return (
      <div className={styles.relative}>
        {this.props.navigation && navButton() }
        {this.props.tabs && tabsToRender() }
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          {childrenToRender}
        </SwipeableViews>
      </div>
    );
  }
}

swipeWrapper.propTypes = {
  children: PropTypes.array.isRequired,
  minWidth: PropTypes.number.isRequired,
  navigation: PropTypes.bool,
  tabs: PropTypes.bool,
};
export default swipeWrapper;
