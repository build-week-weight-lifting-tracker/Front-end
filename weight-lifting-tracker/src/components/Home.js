import React from 'react';

import { HomeContainer, ButtonContainer } from '../styledElements/containers';
import { FormHeading } from '../styledElements/headings';
import { LoginButton, LinkWrapper } from '../styledElements/buttons';


export function Home() {

    return(
        <HomeContainer>
            <FormHeading>Weight Lifting Tracker</FormHeading>
            <ButtonContainer>
                <LinkWrapper to={'/login'}>
                    <LoginButton>Login</LoginButton>
                </LinkWrapper>
                <LinkWrapper to={'/register'}>
                    <LoginButton>Register</LoginButton>
                </LinkWrapper>
            </ButtonContainer>
        </HomeContainer>
    )
}