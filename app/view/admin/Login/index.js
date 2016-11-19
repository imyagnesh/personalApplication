import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import messages from './messages';
import LoginForm from '../../../components/LoginForm/index';
import { loginActions } from '../../../actions';

import baseStyle from '../../../common/Style/baseStyle.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(values) {
    this.props.actions.login(values);
  }

  render() {
    return (
      <main>
        <div className={[baseStyle.content, baseStyle.column, baseStyle.gtMdRow, baseStyle.marginCenter].join(' ')}>
          <LoginForm messages={messages} onSubmit={this.login} />
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
