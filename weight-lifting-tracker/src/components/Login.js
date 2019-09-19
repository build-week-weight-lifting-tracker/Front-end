import React from 'react'
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { LoginButton } from '../styledElements/buttons';
import { FormContainer, FieldDiv } from '../styledElements/containers';
import { FormHeading } from '../styledElements/headings';

function LoginInput ({values, errors, touched}) {

    return (
        <FormContainer>
            <FormHeading>Login</FormHeading>
            <FieldDiv>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type='text' name='username' placeholder='User Name' />
            </FieldDiv>
            <FieldDiv>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='text' name='password' placeholder='Password' />
            </FieldDiv>
            <LoginButton type='submit'>Submit</LoginButton>
        </FormContainer>
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