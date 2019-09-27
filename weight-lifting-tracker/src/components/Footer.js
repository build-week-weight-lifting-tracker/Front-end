import React from 'react'
import styled from 'styled-components'
const NewFooter = styled.footer`
    background-color: 	rgb(222,184,135);
    padding: 10px;
    text-align: center;
`
export default function Footer(){
    return(
        <NewFooter>
            <p>Copyright&copy;2019. All Rights Reserved</p>
        </NewFooter>
    )
}