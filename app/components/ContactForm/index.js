import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import Paper from 'material-ui/Paper';

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
  <Paper className={style.wrapper} zDepth={2}>
    <h3>
      Say Hello
    </h3>
    <form className={style.contactForm} onSubmit={handleSubmit}>
      <div className={style.textDiv}>
        <Field name="name" component={renderTextField} label="Your Name" />
      </div>
      <div className={style.textDiv}>
        <Field name="contact" component={renderTextField} label="Mobile Number" />
      </div>
      <div className={style.textDiv}>
        <Field name="email" component={renderTextField} label="Email Address" />
      </div>
      <div className={style.multiLineTextDiv}>
        <Field name="message" component={renderTextField} label="Message" rows={3} multiLine />
      </div>
      <div className={style.sendButton}>
        <RaisedButton
          label="Send"
          labelPosition="before"
          type="submit"
          icon={<ContentSend />}
          disabled={pristine || submitting}
        />
      </div>
    </form>
  </Paper>
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
