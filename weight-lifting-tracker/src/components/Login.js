import React from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function LoginInput ({values, errors, touched}) {

    return (
        <Form>
            <div>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type='text' name='username' placeholder='User Name' />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='text' name='password' placeholder='Password' />
            </div>
            <button type='submit'>Submit</button>
        </Form>
    )
}

const Login = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('User Name is Required'),
        password: Yup.string().min(7, 'Password Must Be Longer Than 7 Characters').required('Password is Required')
    }),
    handleSubmit(values,{ resetForm }) {
        axios.post('', values)
            .then(response => {
                console.log(response)
                resetForm()
            })
            .catch(err => console.log(err))
    }

})(LoginInput)

export default Login;