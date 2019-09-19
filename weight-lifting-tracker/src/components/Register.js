import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function InputForm({values, errors, touched}) {

    return (
        
        <Form>
            <div>
                {touched.first && errors.first && <p>{errors.first}</p>}
                <Field type='text' name='first' placeholder='First Name' />
            </div>
            <div>
                {touched.last && errors.last && <p>{errors.last}</p>}
                <Field type='text' name='last' placeholder='Last Name' />
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type='email' name='email' placeholder='E-Mail Address' />
            </div>
            <div>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type='text' name='username' placeholder='User Name' />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='password' name='password' placeholder='Password' />
            </div>
            <button type='submit'>Submit</button>
        </Form>

    )
}

const Register = withFormik({
    mapPropsToValues({first, last, email, username, password}) {
        return {
            first: first || '',
            last: last || '',
            email: email || '',
            username: username || '',        
        }
    }
})

export default Register;