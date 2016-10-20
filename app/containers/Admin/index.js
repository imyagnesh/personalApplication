import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
      );
  }
}

Admin.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
};


function mapStateToProps(state, ownProps) {
  return {
    pathname: ownProps.location.pathname,
    loading: state.ajaxCallsInProgress > 0,
  };
}


export default connect(mapStateToProps)(Admin);

