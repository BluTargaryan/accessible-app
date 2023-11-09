'use client'
//router
import { useRouter } from 'next/navigation'
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import 'react-dropdown/style.css';
//from react
import {useState, useEffect} from 'react'

import { bgColor , pryColor, errorColor, txtColor} from "../lib/colors";



import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from "react-icons/md";
import { ErrorIcon } from "./ErrorIcon";


export const PostForm = () =>{
    const [formText, setFormText] = useState("Type in the <b>title, subject, content</b> and select the <b>type</b> of the new post. You can add images as well to the <b>content</b> section, but make sure it has a text label below it!");
    
    const [isErrorTitle, setIsErrorTitle] = useState(false);
    const [isErrorSubject, setIsErrorSubject] = useState(false);
    const [isErrorType, setIsErrorType] = useState(false);
    const [isErrorContent, setIsErrorContent] = useState(false);

    const [inputTitle, setInputTitle] = useState('')


//state for button error
const [isButtonError, setIsButtonError] = useState(false);
//button color
const buttonColor = isButtonError?errorColor:pryColor





    return(
        <StyledForm id="form" >
  <div className="form-text">
    <h2>New post</h2>
    <p dangerouslySetInnerHTML={{ __html: formText }}>
    </p>
  </div>


  <div className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorTitle}/>
    <label htmlFor="title"> Username</label>
    </span>
    <input type="text" id="title" value={inputTitle}  onChange={(e) => setInputTitle(e.target.value)}/>
  </div>

 

  

  <button id="button" style={{color:buttonColor}}>Submit</button>
        </StyledForm>
    )
}

const StyledForm = styled(motion.form)`
      display: flex;
flex-direction: column;
justify-content: center;
gap: 33px;
width: 47%;
height: 800px;
background: ${pryColor};
color: ${bgColor};
padding-left: 91px;




.form-text{
width: 80%;
display: flex;
flex-direction: column;
gap: 31px;
h2{
font-size: 31px;
}
p{
    font-size: 16px;
}
}

.form-input{
    width: 80%;
    display: flex;
flex-direction: column;
gap: 17px;


.dropdown{
    width: 100%;
    height: 45px;
    border-radius: 6px;
    border: 3px solid ${bgColor};
  }

  .dropdown-control{
    padding: 0 10px;
    width: 100%;
    height: 100%;
    background: ${pryColor};
    border: none !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.dropdown-placeholder{
  color: ${bgColor};
  font-size: 20px;
}

.dropdown-menu{
  background: ${pryColor};
  border: none !important;
  color: ${bgColor} !important;
  font-size: 20px;
}

.dropdown-arrow{
 color: ${bgColor};
}
}

button{
    color: ${pryColor};
}


@media (max-width: 576px){
flex: 1;
padding-left:0;
align-items: center;
justify-content: center;
height: 600px;
gap: 25px;


.form-text{
  width: 90%;
  gap: 15px;

  h2{
    font-size: 20px;
  }
  p{
    font-size: 10px;
  }
}

.form-input{
  width: 90%;
  gap: 11px;

  .dropdown-placeholder, .dropdown-menu{
    font-size: 16px;
  }
}


label, input, button{
    font-size: 16px;

}

input{
    height: 30px;
}

button{
    width: 90%;
}
}

@media (min-width: 768px) and (max-width: 991px){
padding-left: 45px;
  gap: 28px;
  width: 50%;

  button{
    width: 80%;
  }

  .form-text{
    gap: 15px;

    h2{
      font-size: 20px;
    }
    p{
      font-size: 13px;
    }
  }

  .form-input{
    .dropdown-placeholder, .dropdown-menu{
    font-size: 16px;
  }
  }
}

@media (min-width: 992px) and (max-width: 1199px){
  padding: 0;
  align-items: center;
  height: 900px;

  button{
    width: 80%;
  }
}

`