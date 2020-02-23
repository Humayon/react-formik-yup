import React, { Component } from 'react';
import { Form, Field } from 'formik';

export class App extends Component {
  render() {
    let { values, errors, touched } = this.props;
    return (
      <Form>
        <div>
          <Field type="email" name="email" placeholder="Email" />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <Field type="password" name="password" placeholder="password" />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>
            <Field
              type="checkbox"
              name="newsletter"
              checked={values.newsletter}
            />
            Join Our Newsletter
          </label>
        </div>
        <div>
          <Field component="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    );
  }
}

export default App;
