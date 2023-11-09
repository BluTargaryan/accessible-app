


'use client'



import { UserForm } from "../comps/AddUserForm";
import { FormNav } from "../comps/formnav";

import { PostForm } from "../comps/AddPostForm";

import { pryColor } from "../lib/colors";
import { abril } from "../lib/fonts";

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";


export default function addPost() {
  return (
  <StyledPost>
<FormNav/>
<Holder>
<div className="text">
<h1>Add a new post to <span className="logo">SmartStudy</span></h1>
<h2>Put in relevant details and create a new post!</h2>
</div>

<PostForm/>

</Holder>
  </StyledPost>
  )
}

const StyledPost = styled(motion.main)`
width: 100%;
height: auto;
padding: 20px 0;
position: relative;
display: flex;
flex-direction: column;
`






const Holder = styled(motion.div)`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 35px;
margin-top: 100px;

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