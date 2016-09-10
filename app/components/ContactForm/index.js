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
  const requiredFields = ['firstName', 'lastName', 'contact', 'email', 'message'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
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


const ContactForm = (({ messages, handleSubmit, pristine, submitting }) =>
  <form className={baseStyle.column} onSubmit={handleSubmit}>
    <div className={baseStyle.gtXsRow}>
      <Field name="firstName" component={renderTextField} label="First Name" />
      <div style={{ flexBasis: '5%' }}></div>
      <Field name="lastName" component={renderTextField} label="Last Name" />
    </div>
    <div className={baseStyle.gtXsRow}>
      <Field name="contact" component={renderTextField} label="Mobile Number" />
      <div style={{ flexBasis: '5%' }}></div>
      <Field name="email" component={renderTextField} label="Email Address" />
    </div>
    <div className={style.textDiv}>
      <Field name="subject" component={renderTextField} label="Subject" />
    </div>
    <div className={style.multiLineTextDiv}>
      <Field name="message" component={renderTextField} label="Message" rows={3} multiLine />
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

ContactForm.propTypes = {
  messages: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'ContactForm',
  validate,
})(ContactForm);
