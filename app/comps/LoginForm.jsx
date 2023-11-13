'use client'
//router
import { useRouter } from 'next/navigation'
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

//from react
import {useState, useEffect} from 'react'

import { bgColor , pryColor, errorColor} from "../lib/colors";

import { MdError } from "react-icons/md";
import { ErrorIcon } from "./ErrorIcon";

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const LoginForm = ()=>{
  const { data, error } = useSWR('/api/getUsers', fetcher)
  //routing
  const router = useRouter()
//state for error case
const [isError1, setIsError1] = useState(false);
const [isError2, setIsError2] = useState(false);
//state for form text
const [formText, setFormText] = useState("Type in the <b>username</b> and <b>password</b> sent to your email");
//state for button error
const [isButtonError, setIsButtonError] = useState(false);
//state for input name 
const [inputName, setInputName] = useState('')
const [inputPassCode, setInputPassCode] = useState('')

//sample login details
const testName = 'donut'
const testCode = '1234sdw'

//button color
const buttonColor = isButtonError?errorColor:pryColor

//func 
const loginCheck= (e)=>{

  e.preventDefault()
  for (const user of data) {
// console.log(user.username)
// console.log(user.passcode)

    if (inputName === user.username && inputPassCode === user.passcode) {
      console.log("Login successful!");
      if(isError1===false || isError2===false){
        successState()
        setInputName('')
        setInputPassCode('')
        router.push(`/landing?usertype=${encodeURIComponent(user.usertype)}`)
      }
      break;
  } 
  else {
  if(inputName !== user.username){
  toggleError( setIsError1, "The <b>username</b> doesn't match the value in our records. please check and re-enter the username")
  setInputName('')
  }
  if(inputPassCode !== user.passcode){
  toggleError( setIsError2, "The <b>passcode</b> doesn't match the value in our records. please check and re-enter the passcode")
    setInputPassCode('')
  }
  }
  }



}

//func to switch errorstate
const toggleError = ( setError, fText)=>{
  
  setError(true)
  document.getElementById('form').classList.add('bgError')
setIsButtonError(true)
  setFormText(fText)
}

//func on successful state

const successState = () =>{
  setIsError1(false)
  setIsError2(false)
  document.getElementById('form').classList.remove('bgError')
  setIsButtonError(false)
  setFormText("Type in the <b>username</b> and <b>password</b> sent to your email")
}



    return(
        <StyledForm id="form" onSubmit={loginCheck}>
  <div className="form-text">
    <h2>Log in</h2>
    <p dangerouslySetInnerHTML={{ __html: formText }}>
    </p>
  </div>


  <div className="form-input">
  <span className="flex">
    <ErrorIcon 
    isError={isError1}/>
    <label htmlFor="username"> Username</label>
    </span>
    <input type="text" id="username" value={inputName}  onChange={(e) => setInputName(e.target.value)}/>
  </div>


  <div className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isError2}/>
    <label htmlFor="passcode"> Passcode</label>
    </span>
    <input type="password" id="passcode" value={inputPassCode}  onChange={(e) => setInputPassCode(e.target.value)}/>
  </div>
  {
    data && <button id="button" style={{color:buttonColor}}>Submit</button>
  }


        </StyledForm>
    )
}

const StyledForm = styled(motion.form)`
      display: flex;
flex-direction: column;
justify-content: center;
gap: 33px;
width: 47%;
height: 90%;
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


}


@media (max-width: 576px){
flex: 1;
padding-left:0;
align-items: center;
justify-content: center;
height: 100%;
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

@media (min-width:577px)and  (max-width:992px){
padding-left: 45px;
  gap: 28px;

  .form-text{
    gap: 15px;

    h2{
      font-size: 25px;
    }
    p{
      font-size: 13px;
    }
  }

  
}


`