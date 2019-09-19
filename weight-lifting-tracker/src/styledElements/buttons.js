import styled from 'styled-components';

export const LoginButton = styled.button`
    background: none;
    width: 70%;
    max-width: 300px;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 2px;
    color: white;
    border: solid 1px;
    margin-top: 20px;
    padding: 15px 0;
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out, background 0.2s ease-in-out;
    &:hover {
        background-color: #645862;
    }
`