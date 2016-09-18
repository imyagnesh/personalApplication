import React, { Component, PropTypes, Children } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import baseStyle from '../../common/Style/baseStyle.css';
import styles from './styles.css';


class swipeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth, index: 0 };
    this.handleResize = this.handleResize.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.handleChangeTabs = this.handleChangeTabs.bind(this);
    this.hanldeRBChange = this.hanldeRBChange.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.setState({
      defaultSelected: this.state.index,
    });
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
  handleChangeTabs(value) {
    this.setState({
      index: value,
    });
  }
  hanldeRBChange(event, value) {
    this.setState({
      index: value,
    });
  }
  changeValue(defaultSelected) {
    this.setState({
      defaultSelected,
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

    const radioButton = () => {
      if (childrenToRender.length < 2) {
        return null;
      }
      const rbProps = {
        defaultSelected: this.state.defaultSelected,
        valueSelected: this.state.index,
      };
      return (
        <RadioButtonGroup name="swipeButton" onChange={this.hanldeRBChange} {...rbProps} className={[baseStyle.row, baseStyle.alignCenter, styles.margin10].join(' ')}>
          {childrenToRender.map(((child, index) =>
            <RadioButton key={index} value={index} style={{ width: 'auto' }} />
          )) }
        </RadioButtonGroup>
      );
    };

    return (
      <div>
        {this.props.tabs && tabsToRender() }
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          {childrenToRender}
        </SwipeableViews>
        {this.props.navigation && radioButton() }
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
