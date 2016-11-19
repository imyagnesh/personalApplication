import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import messages from './messages';
import RegistrationForm from '../../../components/RegistrationForm/index';
import { registerActions } from '../../../actions';

import baseStyle from '../../../common/Style/baseStyle.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.Register = this.Register.bind(this);
  }

  Register(values) {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      role: 'admin',
    };
    this.props.actions.registerUser(data);
  }

  render() {
    return (
      <main>
        <div className={[baseStyle.content, baseStyle.column, baseStyle.gtMdRow, baseStyle.marginCenter].join(' ')}>
          <RegistrationForm messages={messages} onSubmit={this.Register} />
        </div>
      </main>
    );
  }
}

Register.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
