import React from 'react'
import styled from 'styled-components'

const newHeader = styled.header`
    background: #C33764;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1D2671, #C33764);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1D2671, #C33764); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
`
export default function Header(){
    return(
        <newHeader>
            <h1>WeightLifting Workout Journal</h1> 
        </newHeader>
    )
}