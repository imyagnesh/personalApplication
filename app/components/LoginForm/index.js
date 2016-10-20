import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';

import baseStyle from '../../common/Style/baseStyle.css';
import style from './styles.css';

const validate = values => {
  const errors = {};
  const requiredFields = ['userName', 'password'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    errorStyle={{ display: 'none' }}
    fullWidth
    {...input}
    {...custom}
  />
);


const LoginForm = (({ messages, handleSubmit, pristine, submitting }) =>
  <form className={baseStyle.column} onSubmit={handleSubmit}>
    <div className={style.textDiv}>
      <Field name="userName" component={renderTextField} label="User Name" />
    </div>
    <div className={style.multiLineTextDiv}>
      <Field name="password" component={renderTextField} label="Password" type="password" />
    </div>
    <div className={style.sendButton}>
      <RaisedButton
        style={{ height: '50px', minWidth: '150px' }}
        labelStyle={{ lineHeight: '50px' }}
        secondary
        label="Send"
        labelPosition="before"
        type="submit"
        icon={<ContentSend />}
        disabled={pristine || submitting}
      />
    </div>
  </form>
);

LoginForm.propTypes = {
  messages: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'ContactForm',
  validate
})(LoginForm);
