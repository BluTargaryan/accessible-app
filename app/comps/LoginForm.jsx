'use client'
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { bgColor , pryColor} from "../lib/colors";

export const LoginForm = ()=>{

    return(
        <StyledForm>
  <div className="form-text">
    <h2>Log in</h2>
    <p>
    Type in the <b>username</b> and <b>password</b> sent to your email
    </p>
  </div>


  <div className="form-input">
    <label htmlFor="username">Username</label>
    <input type="text" id="username"/>
  </div>


  <div className="form-input">
    <label htmlFor="passcode">Passcode</label>
    <input type="password" id="passcode"/>
  </div>

<button>Submit</button>
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
  border: 1px solid white;

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