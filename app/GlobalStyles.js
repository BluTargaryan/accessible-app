'use client'

import { poppins} from './lib/fonts'
import { createGlobalStyle } from 'styled-components'

const bgColor= "#030507"
const pryColor = "#7EA6F1"
const txtColor = "#ECEFF3"
const errorColor = "#FF6666"
const accentColor = "#AD9A7F"
const successColor = "#55A95D"
const pryShadeColor = "#0F141D"

const GlobalStyles = createGlobalStyle`
*{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box ;
   
}

body{
    background: ${bgColor};
    color: ${pryColor};
    width:100vw;
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

label, input{
    font-size: 20px;
}

.flex{
    display: flex;
    gap: 10px;
    align-items: center;
}

.icon{
    color: ${bgColor};
    font-size: 20px;
}

.icon-pry{
    color: ${pryColor};
    font-size: 20px;
}


.bgError{
    background: ${errorColor} !important;
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

.quill{
    border: 3px solid ${bgColor};
border-radius: 4px;
height: 600px;
color: ${bgColor} !important;
font-family: ${poppins.style.fontFamily};
font-size: 16px;

.ql-formats{
    button{
        &:hover{
        box-shadow: none;
    }
    &:focus{
        box-shadow: none;
       border:3px solid ${bgColor};
    }
    }

    &:hover{
        box-shadow: none;
        color: ${bgColor};
       background: ${bgColor};
    }

    &:focus{
        box-shadow: none;
        color: ${bgColor};
       border:3px solid ${bgColor};
       outline: none;
    }
}

.ql-toolbar{
    border: none;
    border-bottom: 3px solid ${bgColor};
    height: 7% !important;
    
}

#snow-container, .ql-container{
    height: 93% !important;
    border: none;
    font-size: 16px;
}
}

button{
    font-size: 20px;
    width: 180px;
    height: 45px;
    text-align: center;
    background: ${bgColor};
    border: none;
    border-radius: 4px ;
    cursor: pointer;
    transition: .2s ease-in;

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

.btn-pry{
    background: ${pryColor} !important; 
    transition: .2s ease-in;

    &:hover{
        box-shadow: 4px 0px 4px 0px rgba(126, 166, 241, 0.25), -4px 0px 4px 0px rgba(126, 166, 241, 0.25), 0px -4px 4px 0px rgba(126, 166, 241, 0.25), 0px 4px 4px 0px rgba(126, 166, 241, 0.25);
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

.btn-accent{
    background: ${accentColor} !important; 

    &:hover{
        box-shadow: 4px 0px 4px 0px rgba(173, 154, 127, 0.25), -4px 0px 4px 0px rgba(173, 154, 127, 0.25), 0px -4px 4px 0px rgba(173, 154, 127, 0.25), 0px 4px 4px 0px rgba(173, 154, 127, 0.25);
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