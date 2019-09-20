import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const LoginButton = styled.button`
    background: none;
    width: 100%;
    max-width: 300px;
    font-size: 1.5rem;
    font-weight: 900;
    font-family: Lato, san serif;
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
export const LinkWrapper = styled(Link)`
    width: 35%;
    display: flex;
    justify-content: center;
`