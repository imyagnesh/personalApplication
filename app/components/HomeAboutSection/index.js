import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import SwipeableViews from 'react-swipeable-views';

import baseStyle from '../../common/Style/baseStyle.css';

class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.handleChangeTabs = this.handleChangeTabs.bind(this);
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
  render() {
    const raisedButton = ((props) =>
      <RaisedButton onClick={() => this.handleChangeTabs(props.index)} labelStyle={{ paddingLeft: '14px', paddingRight: '14px' }} label={props.label} secondary />
    );
    const flatButton = ((props) =>
      <FlatButton onClick={() => this.handleChangeTabs(props.index)} labelStyle={{ paddingLeft: '14px', paddingRight: '14px' }} label={props.label} />
    );
    return (
      <div className={[baseStyle.content, baseStyle.column, baseStyle.marginCenter].join(' ')}>
        <div className={[baseStyle.column, baseStyle.alignCenterCenter].join(' ')}>
          <p className={[baseStyle.caption].join(' ')}>Know Something</p>
          <h1 className={[baseStyle.title, baseStyle.upperCase].join(' ')}>Who am I</h1>
          <div className={baseStyle.alignSelfCenter} style={{ width: '60px' }}><Divider /></div>
        </div>
        <div className={[baseStyle.column, baseStyle.alignCenterCenter].join(' ')}>
          <div>
            {
              this.state.index === 0 ? raisedButton({ label: 'About Me', index: 0 }) : flatButton({ label: 'About Me', index: 0 })
            }
            {
              this.state.index === 1 ? raisedButton({ label: 'My Vision', index: 1 }) : flatButton({ label: 'My Vision', index: 1 })
            }
            {
              this.state.index === 2 ? raisedButton({ label: 'My Goal', index: 2 }) : flatButton({ label: 'My Goal', index: 2 })
            }
          </div>
          <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
            <div> About Me </div>
            <div> My Vision </div>
            <div> My Goal </div>
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

export default AboutSection;
