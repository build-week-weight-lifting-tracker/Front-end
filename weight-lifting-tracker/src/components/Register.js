import React from 'react';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Styled component imported for the registration form submit button
import { LoginButton } from '../styledElements/buttons';
//  Styled components for the form container and the input field containers
import { FormContainer, FieldDiv } from '../styledElements/containers';
// Styled component for the heading in the form
import { FormHeading } from '../styledElements/headings';


function InputForm({values, errors, touched}) {

    return (
        
        <FormContainer>
            <FormHeading>Register Here</FormHeading>
            <FieldDiv>
                {/* Users First Name Input */}
                {touched.first && errors.first && <p>{errors.first}</p>}
                <Field type='text' name='first' placeholder='First Name' />
            </FieldDiv>
            <FieldDiv>
                {/* Users Last Name Input */}
                {touched.last && errors.last && <p>{errors.last}</p>}
                <Field type='text' name='last' placeholder='Last Name' />
            </FieldDiv>
            <FieldDiv>
                {/* Users Email Address Input */}
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type='email' name='email' placeholder='E-Mail Address' />
            </FieldDiv>
            <FieldDiv>
                {/* Users Username Creation Input */}
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type='text' name='username' placeholder='User Name' />
            </FieldDiv>
            <FieldDiv>
                {/* User Password Creation Input */}
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='password' name='password' placeholder='Password' />
            </FieldDiv>
            <LoginButton type='submit'>Submit</LoginButton>
        </FormContainer>

    )
}

const Register = withFormik({
    mapPropsToValues({first, last, email, username, password}) {
        return {
            first: first || '',
            last: last || '',
            email: email || '',
            username: username || '',
            password: password || ''        
        }
    },
    validationSchema: Yup.object().shape({
        first: Yup.string().required('Your First Name is Required'),
        last: Yup.string().required('Your Last Name is Required'),
        email: Yup.string().email('E-Mail is Not Valid').required('E-Mail is Required'),
        username: Yup.string().max(128, 'User Name too Long').required('User Name is Required'),
        password: Yup.string().min(7, 'Your password must be at least 7 characters long').required('Password is Required')
    }),

    handleSubmit(values, { resetForm }, props) {
        axios.post('https://weightlifting-tracker-bw.herokuapp.com/', values)
            .then(response => {
                console.log(response)
                props.serUser(response.data)
                props.history.push('/')
                resetForm()
            })
            .catch(err => console.log(err))
        console.log(values)
    }
})(InputForm)

export default Register;