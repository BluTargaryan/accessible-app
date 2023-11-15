


'use client'



import { UserForm } from "../comps/AddUserForm";
import { FormNav } from "../comps/formnav";

import { PostForm } from "../comps/AddPostForm";

import { pryColor } from "../lib/colors";
import { abril } from "../lib/fonts";

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { useSearchParams } from "next/navigation";


export default function addPost() {

  const searchParams = useSearchParams()
    const usertype = decodeURIComponent(searchParams.get('usertype'))
  return (
  <StyledPost>
<FormNav/>
<Holder >
<section aria-label="form-majortext" className="text">
<h1>Add a new post to <span className="logo">SmartStudy</span></h1>
<h2>Put in relevant details and create a new post!</h2>
</section>

<PostForm
usertype={usertype}/>

</Holder>
  </StyledPost>
  )
}

const StyledPost = styled(motion.section)`
width: 100%;
height: auto;
padding: 20px 0;
position: relative;
display: flex;
flex-direction: column;
`






const Holder = styled(motion.main)`
width: 100%;
height: auto;
display: flex;
align-items: start;
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