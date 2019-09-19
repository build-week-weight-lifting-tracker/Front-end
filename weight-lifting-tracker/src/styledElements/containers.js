import styled from 'styled-components';
import { Form } from 'formik';


export const FormContainer = styled(Form)`
background-color: rgba(52, 27, 43, 0.5);
padding: 40px;
width: 70%
max-width: 800px;
display: flex;
flex-direction: column;
align-items: center;
`

export const AppContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #7c8081;
`
export const FieldDiv = styled.div `
    display:flex;
    justify-content: center;
    margin: 5px;
`