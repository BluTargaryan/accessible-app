'use client'



import { LoginForm } from "./comps/LoginForm";
//comps
import { NavComp } from "./comps/nav"
import { pryColor } from "./lib/colors";

//fonts
import { abril } from "./lib/fonts";

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";



export default function Home() {



  return (
  <Login>
<NavComp/>
<Holder role="main">
<div className="text">
<h1>Welcome back to <span className="logo">SmartStudy</span></h1>
<h2>Please login using your account details</h2>
</div>
<LoginForm/>



</Holder>
  </Login>
  )
}

const Login = styled(motion.div)`
width: 100%;
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
`

const Holder = styled(motion.main)`
width: 100%;
flex: 1;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 35px;

.text{
  color: ${pryColor};
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  h1{
   font-size :61px ;
   font-weight: 400;
   line-height: normal;

.logo{
font-family: ${abril.style.fontFamily};
}
  }

  h2{
    font-size: 31px;
    font-weight: 400;
  }
}


@media (max-width: 576px){
  .text{
    display: none;
  }
}

@media (max-width: 768px){
.text{
  gap: 20px;

  h1{
    font-size: 31px;
  }

  h2{
    font-size: 16px;
  }
}
}

@media (max-width: 992px){
  .text{
    gap: 20px;

    h1{
      font-size: 39px;
    }
    h2{
      font-size: 20px;
    }
  }
}

`