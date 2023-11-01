'use client'

import { poppins} from './lib/fonts'
import { createGlobalStyle } from 'styled-components'

const bgColor= "#030507"
const pryColor = "#7EA6F1"
const txtColor = "#ECEFF3"

const GlobalStyles = createGlobalStyle`
*{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box ;
}

body{
    background: ${bgColor};
    color: ${pryColor};
    width:100vw ;
    height:auto ;
    overflow-x:hidden ;
    font-family: ${poppins.style.fontFamily};
    font-weight: 400;
    cursor:default ;
}

a{
    text-decoration:none ;
}

ul{
    list-style:none ;
}

input{
background: none;
border: 3px solid ${bgColor};
border-radius: 4px;
height: 45px;
width: 100%;
padding-left: 3%;

&:focus{
    outline: none;
    border: 3px solid ${txtColor};
    background: ${bgColor};
    color: ${txtColor};
}

}

button{
    font-size: 20px;
    width: 180px;
    height: 45px;
    text-align: center;
    background: ${bgColor};
    color: ${pryColor};
    border: none;
    border-radius: 4px ;
    cursor: pointer;

    &:hover{
        box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.25), -4px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    &:focus{
        outline: none;
        color: ${txtColor}; 
        border: 3px solid ${txtColor};
    }
    &:active{
        background: ${txtColor};
        color: ${bgColor};
    }
}
`

export default GlobalStyles;