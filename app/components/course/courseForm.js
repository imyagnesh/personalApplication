import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import SelectField from '../SelectField/index';
import MenuItem from 'material-ui/MenuItem';
import TextField from '../TextField/index';

const validate = values => {
  const errors = {};
  const requiredFields = ['title', 'authorId', 'length', 'category'];
  requiredFields.forEach(field => {
      if (!values[field]) {
          errors[field] = 'Required';
        }
    });
    //   if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address'
    //   }
  return errors;
};

// const renderCheckbox = ({ input, label }) => (
//   <Checkbox label={label}
//     checked={input.value ? true : false}
//     onCheck={input.onChange}/>
// )

// const renderRadioButtonGroup = ({ input, label, meta: { touched, error }, children }) => (
//   <RadioButtonGroup
//     {...input}
//     defaultSelected={input.value}
//     onChange={(event, value) => input.onChange(value)}
//     children={children}/>
// )

let MaterialUiForm = props => {
  const { authors, handleSubmit, pristine, reset, submitting } = props;
  return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="title" component={TextField} label="Title" />
            </div>
            <div>
                <Field name="category" component={TextField} label="Category" />
            </div>
            <div>
                <Field name="length" component={TextField} label="Length" />
            </div>

            <div>
                <Field name="authorId" component={SelectField} label="Author">
                    {authors.map((author) => {
                      return <MenuItem key={author.value} value={author.value} primaryText={author.text} />;
                    })
                    }
                </Field>
            </div>

            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
                </button>
            </div>
        </form>
    );
};

MaterialUiForm.propTypes = {
  authors: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

MaterialUiForm = reduxForm({
  form: 'MaterialUiForm',
  enableReinitialize: true,
  validate,
})(MaterialUiForm);


export default MaterialUiForm;
