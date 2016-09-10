import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Drawer from '../../components/Drawer/index';
import messages from './messages';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentUp from 'material-ui/svg-icons/navigation/arrow-upward';
import muiTheme from '../../muiTheme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';
import ScrollWrapper from '../ScrollWrapper/index';

import styles from './styles.css';


class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      headerBackground: '',
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.onDrawerRequestChange = this.onDrawerRequestChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  onDrawerRequestChange(open) {
    this.setState({ open });
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={styles.wrapper}>
          <Helmet
            titleTemplate="%s - Yagnesh Modh"
            defaultTitle="Yagnesh Modh"
            meta={[
              { name: 'description', content: 'Personal Application' },
            ]}
          />
          <FloatingActionButton className={[styles.scrollTopButton, this.state.scrollTopClass].join(' ')} mini secondary>
            <ContentUp />
          </FloatingActionButton>
          {this.props.loading && <LinearProgress mode="indeterminate" />}
          <ScrollWrapper children={<Header
            pathname={this.props.pathname}
            toggleDrawer={this.handleToggle}
            messages={messages}
            UpdateBackground
          />}>

          </ScrollWrapper>
          <Drawer
            drawerState={this.state.open}
            toggleDrawer={this.handleToggle}
            onDrawerRequestChange={this.onDrawerRequestChange}
            messages={messages}
          />
          {this.props.children}
          <Footer messages={messages} />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
};


function mapStateToProps(state, ownProps) {
  return {
    pathname: ownProps.location.pathname,
    loading: state.ajaxCallsInProgress > 0,
    pageYOffset: state.pageYOffset,
  };
}


export default connect(mapStateToProps)(App);

