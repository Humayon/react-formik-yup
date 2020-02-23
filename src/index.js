import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, color }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      color: color || 'red'
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Please fill the input field'),
    password: Yup.string()
      .min(9, 'password must be 9 characters or longer')
      .required('Please enter your password')
  }),
  handleSubmit(values, { resetForm }) {
    console.log(values);
    resetForm();
  }
})(App);
ReactDOM.render(<FormikApp />, document.getElementById('root'));
