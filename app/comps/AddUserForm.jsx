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

export const UserForm = ()=>{

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

//dropdown options
const options = [
  'Staff', 'Student', 
]

const defaultOption = options[0];

const handleChange = (e) => {
  setSelected(e.value)
 console.log(e.value)
};

//func to add new user
const registerFunc= (e)=>{
e.preventDefault()


fetch('http://localhost:3000/api/createUser', {
  method: 'POST',
  body: JSON.stringify({
     username: inputName, 
     email: inputEmail,
     passcode: inputPassCode, 
     usertype: selected}),
});
}





    return(
        <StyledForm id="form" onSubmit={registerFunc}>
  <div className="form-text">
    <h2>Register new user</h2>
    <p dangerouslySetInnerHTML={{ __html: formText }}>
    </p>
  </div>


  <div className="form-input">
  <span className="flex">
    <label htmlFor="username"> Username</label>
    </span>
    <input type="text" id="username" value={inputName}  onChange={(e) => setInputName(e.target.value)}/>
  </div>

  <div className="form-input">
  <span className="flex">
    <label htmlFor="passcode"> Passcode</label>
    </span>
    <input type="text" id="passcode" value={inputPassCode}  onChange={(e) => setInputPassCode(e.target.value)}/>
  </div>

  <div className="form-input">
  <span className="flex">
    <label htmlFor="email"> Email</label>
    </span>
    <input type="text" id="email" value={inputEmail}  onChange={(e) => setInputEmail(e.target.value)}/>
  </div>

  <div className="form-input">
  <span className="flex">
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
  </div>
  

<button id="button">Submit</button>
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