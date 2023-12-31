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
      setIsError1(false)
      setIsError2(false)

        successState()
        setInputName('')
        setInputPassCode('')
        router.push(`/landing?usertype=${encodeURIComponent(user.usertype)}`)

      break;
  } 
  else {
  if(inputName !== user.username && inputPassCode === user.passcode){
  toggleError( "The <b>username</b> doesn't match the value in our records. please check and re-enter the username")
  setIsError1(true)
  setIsError2(false)
  break
  }
  else if(inputPassCode !== user.passcode && inputName === user.username){
  toggleError( "The <b>passcode</b> doesn't match the value in our records. please check and re-enter the passcode")
  setIsError2(true)
  setIsError1(false)  
    break
  }
  else{
    toggleError( "The <b>passcode</b> and <b>username</b> doesn't match the value in our records. please check and re-enter the passcode")
    toggleError( "The <b>passcode</b> and <b>username</b> doesn't match the value in our records. please check and re-enter the passcode")
    setIsError2(true)
  setIsError1(true)   
    }


  }
  }



}

//func to switch errorstate
const toggleError = ( fText)=>{
  
 
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
  <section aria-label='form-infoText' className="form-text">
    <h2>Log in</h2>
    <p dangerouslySetInnerHTML={{ __html: formText }}>
    </p>
  </section>


  <section aria-label='username' className="form-input">
  <span className="flex">
    <ErrorIcon 
    isError={isError1}/>
    <label htmlFor="username"> Username</label>
    </span>
    <input type="text" id="username" value={inputName}  onChange={(e) => setInputName(e.target.value)}/>
  </section>


  <section aria-label='passcode' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isError2}/>
    <label htmlFor="passcode"> Passcode</label>
    </span>
    <input type="password" id="passcode" value={inputPassCode}  onChange={(e) => setInputPassCode(e.target.value)}/>
  </section>
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