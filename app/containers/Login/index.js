import React, { Component, PropTypes } from 'react';
import messages from './messages';
import LoginForm from '../../components/LoginForm/index';

import baseStyle from '../../common/Style/baseStyle.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {}

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

Login.propTypes = {};

export default Login;
