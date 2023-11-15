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

export const UserForm = ({usertype})=>{

  //routing
  const router = useRouter()
//state for error case

//state for form text
const [formText, setFormText] = useState("Type in the their <b>username</b> and <b>password</b>, as well as the <b>email</b> they will use to receive their login details. Do not forget to specify which <b>type of user</b> they are.");

//state for input name 
const [inputName, setInputName] = useState('')
const [inputPassCode, setInputPassCode] = useState('')
const [inputEmail, setInputEmail] = useState('')
const [selected, setSelected] = useState('')

//state for button error
const [isButtonError, setIsButtonError] = useState(false);

//state to open conf alert
const [openSuccess, setOpenSuccess] = useState(false)

//dropdown options
const options = [
  'Staff', 'Student', 
]

//button color
const buttonColor = isButtonError?errorColor:pryColor

const handleChange = (e) => {
  setSelected(e.value)
};

//func to add new user
const registerFunc= (e)=>{
e.preventDefault()

if (inputName !== '' && inputPassCode !== ''&& inputEmail !== ''&& selected !== '') {
uponConfirmation()
router.push(`/addUser/${inputName}?usertype=${usertype}`)
}else{
  if(inputName === '') toggleError(setIsErrorName, 'You left the <b>name</b> section empty. Please fill it to successfully register a new user.')
  if(inputPassCode === '') toggleError(setIsErrorPasscode, 'You left the <b>passcode</b> section empty. Please fill it to successfully register a new user.')
  if(inputEmail === '') toggleError(setIsErrorEmail, 'You left the <b>email</b> section empty. Please fill it to successfully register a new user.')
  if(selected === '') toggleError(setIsErrorType, 'You did not select a <b>user type</b>. Please select one to successfully register a new user.')
}


}

//if allowed to add user
const uponConfirmation = ()=>{
  fetch('http://localhost:3000/api/createUser', {
    method: 'POST',
    body: JSON.stringify({
       username: inputName, 
       email: inputEmail,
       passcode: inputPassCode, 
       usertype: selected}),
  });
}


const toggleError = ( setError, fText)=>{
  setError(true)
  document.getElementById('form').classList.add('bgError')
setIsButtonError(true)
  setFormText(fText)
}


const [isErrorName, setIsErrorName] = useState(false);
const [isErrorPasscode, setIsErrorPasscode] = useState(false);
const [isErrorEmail, setIsErrorEmail] = useState(false);
const [isErrorType, setIsErrorType] = useState(false);


    return(
        <StyledForm id="form" onSubmit={registerFunc}>
  <section aria-label='form-introtext' className="form-text">
    <h3>Register new user</h3>
    <p dangerouslySetInnerHTML={{ __html: formText }}>
    </p>
  </section>


  <section aria-label='username' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorName}/>
    <label htmlFor="username"> Username</label>
    </span>
    <input type="text" id="username" value={inputName}  onChange={(e) => setInputName(e.target.value)}/>
  </section>

  <section aria-label='passcode' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorPasscode}/>
    <label htmlFor="passcode"> Passcode</label>
    </span>
    <input type="text" id="passcode" value={inputPassCode}  onChange={(e) => setInputPassCode(e.target.value)}/>
  </section>

  <section aria-label='email' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorEmail}/>
    <label htmlFor="email"> Email</label>
    </span>
    <input type="text" id="email" value={inputEmail}  onChange={(e) => setInputEmail(e.target.value)}/>
  </section>

  <section aria-label='usertype' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorType}/>
    <label htmlFor="type"> User type</label>
    </span>
    <Dropdown options={options}  
    id='type'
    onChange={(val) => handleChange(val)}
        placeholder="Select user type" 
        className="dropdown" 
        controlClassName="dropdown-control" 
        placeholderClassName="dropdown-placeholder"
        menuClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        arrowClosed={<MdOutlineKeyboardArrowDown className="icon"/>}
  arrowOpen={<MdOutlineKeyboardArrowUp className="icon"/>}
/>
  </section>
  

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
h3{
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

  h3{
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

    h3{
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