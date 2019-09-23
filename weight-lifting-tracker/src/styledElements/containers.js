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
box-shadow: 2px 2px 5px black;
`

export const AppContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const FieldDiv = styled.div `
    display:flex;
    justify-content: center;
    margin: 5px;
`

export const HomeContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(52, 27, 43, 0.5);
    width: 70%;
    max-width: 800px;
    justify-content: center;
    padding: 50px 0;
    box-shadow: 2px 2px 5px black;
`
export const ButtonContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`