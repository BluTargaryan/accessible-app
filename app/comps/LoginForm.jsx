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
width: 674px;
height: 530px;
background: ${pryColor};
color: ${bgColor};
padding-left: 91px;

.form-text{
width: 100%;
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
    width: 450px;
    display: flex;
flex-direction: column;
gap: 17px;

label, input{
    font-size: 20px;
}


}



`