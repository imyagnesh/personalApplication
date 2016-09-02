import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';

import style from './styles.css';

const validate = values => {
  const errors = {};
  const requiredFields = ['name', 'contact', 'email', 'message'];
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
    fullWidth
    {...input}
    {...custom}
    />
);


const ContactForm = (({ messages, handleSubmit, pristine, submitting }) =>
  <div className={style.wrapper}>
    <p>
      Say Hello
    </p>
    <Divider />
    <form className={style.contactForm} onSubmit={handleSubmit}>
      <Field name="name" component={renderTextField} label="Your Name" />
      <Field name="contact" component={renderTextField} label="Mobile Number" />
      <Field name="email" component={renderTextField} label="Email Address" />
      <Field name="message" component={renderTextField} label="Message" rows={3} multiLine />
      <RaisedButton
        label="Send"
        labelPosition="before"
        type="submit"
        icon={<ContentSend />}
        disabled={pristine || submitting}
        className={style.sendButton}
        />
    </form>
  </div>
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
