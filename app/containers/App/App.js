import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Drawer from '../../components/Drawer/index';
import messages from './messages';
import ScrollToTop from 'react-scroll-up';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentUp from 'material-ui/svg-icons/navigation/arrow-upward';
import muiTheme from '../../muiTheme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';

import styles from './styles.css';

const style = {
  scrollButtonStyle: {
    position: 'fixed',
    bottom: 50,
    right: 30,
    zIndex: 1,
    cursor: 'pointer',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',
  },
};

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      backgroundStyle: 'rgba(0, 0, 0, 1)',
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.onDrawerRequestChange = this.onDrawerRequestChange.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);
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
          <ScrollToTop style={style.scrollButtonStyle} showUnder={160}>
            <FloatingActionButton mini secondary>
              <ContentUp />
            </FloatingActionButton>
          </ScrollToTop>
          {this.props.loading && <LinearProgress mode="indeterminate" />}
          <Header
            pathname={this.props.pathname}
            backgroundStyle={this.state.backgroundStyle}
            toggleDrawer={this.handleToggle}
            messages={messages}
          />
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

