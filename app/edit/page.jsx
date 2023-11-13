


'use client'



import { UserForm } from "../comps/AddUserForm";
import { FormNav } from "../comps/formnav";

import { PostForm } from "../comps/AddPostForm";

import { pryColor } from "../lib/colors";
import { abril } from "../lib/fonts";

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { EditForm } from "../comps/EditPostForm";

import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";


export default function editPost() {
    const router = useRouter();

    const searchParams = useSearchParams()

    const id = searchParams.get('id')
    const title = searchParams.get('title')
    const posttype = searchParams.get('posttype')
    const img = searchParams.get('img')
    const alt = searchParams.get('alt')
    const subject = searchParams.get('subject')
    const content = decodeURIComponent(searchParams.get('content'));




    const [idState, setId] = useState(id)
    const [titleState, setTitle] = useState(title)
    const [posttypeState, setPostType] = useState(posttype)
    const [imgState, setImg] = useState(img)
    const [altState, setAlt] = useState(alt)
    const [subjectState, setSubject] = useState(subject)
    const [contentState, setContent] = useState(content)

  

  return (
  <StyledPost>
<FormNav/>
<Holder>
<div className="text">
<h1>Edit this record in <span className="logo">SmartStudy</span></h1>
<h2>Change relevant details and submit to update this post</h2>
</div>

<EditForm
id={idState}
title={titleState}
posttype={posttypeState}
img={imgState}
alt={altState}
subject={subjectState}
content={contentState}/>

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