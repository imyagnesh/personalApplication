import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dashboardActions from '../../actions/dashboardActions';

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.fetchData = this.fetchData.bind(this);
  }


  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.actions.loadDashboard();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <h1>{currentUser.email}</h1>
        <h1>{currentUser.name}</h1>
        <h1>{currentUser.role}</h1>
        <h1>Home Page</h1>
        <p>About Me</p>
        <p>My Vision</p>
        <p>My Goal</p>
        <p>SKills</p>
        <p>Work Experiance</p>
        <p>Projects</p>
        <p>blog</p>
        <p>Certification</p>
        <p>Portfolio</p>
      </div>
    );
  }
}

Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(dashboardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
