import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import AuthenticationApi from '../../api/authenticationApi';


import baseStyle from '../../common/Style/baseStyle.css';
import style from './styles.css';

const asyncValidate = (values/* , dispatch */) =>
  AuthenticationApi.isUserUnique(values.email).then(result => {
    if (!result.data) throw { email: result.message };
  });

const warn = values => {
  const warnings = {};
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    warnings.email = 'Invalid email address';
  }
  if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password)) {
    warnings.password = 'Invalid Password';
  }
  if (values.password !== values.confirmPassword) {
    warnings.confirmPassword = 'Password Does not match with Confirm Password';
  }
  return warnings;
};


const validate = values => {
  const errors = {};
  const requiredFields = ['name', 'email', 'password', 'confirmPassword'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const renderTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && (error || warning)}
    fullWidth
    {...input}
    {...custom}
    />
);


const RegistrationForm = ({ messages, handleSubmit, pristine, submitting }) => (
  <form className={baseStyle.column} onSubmit={handleSubmit}>
    <div className={style.textDiv}>
      <Field name="name" component={renderTextField} label="Name" />
    </div>
    <div className={style.textDiv}>
      <Field name="email" component={renderTextField} label="Email" />
    </div>
    <div className={style.multiLineTextDiv}>
      <Field
        name="password"
        component={renderTextField}
        label="Password"
        type="password"
        />
    </div>
    <div className={style.multiLineTextDiv}>
      <Field
        name="confirmPassword"
        component={renderTextField}
        label="Confirm Password"
        type="password"
        />
    </div>
    <div className={style.sendButton}>
      <RaisedButton
        style={{ height: '50px', minWidth: '150px' }}
        labelStyle={{ lineHeight: '50px' }}
        secondary
        label="Submit"
        labelPosition="before"
        type="submit"
        icon={<ContentSend />}
        disabled={pristine || submitting}
        />
    </div>
  </form>
);

RegistrationForm.propTypes = {
  messages: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'RegistrationForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
  warn,
})(RegistrationForm);
