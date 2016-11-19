import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import muiTheme from '../../muiTheme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Helmet titleTemplate="%s - Yagnesh Modh" defaultTitle="Yagnesh Modh" meta={[{ name: 'description', content: 'Personal Application' }]} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
      );
  }
}

Main.propTypes = {
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


export default connect(mapStateToProps)(Main);
