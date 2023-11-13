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

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

import { bgColor , pryColor, errorColor, txtColor} from "../lib/colors";



import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from "react-icons/md";
import { ErrorIcon } from "./ErrorIcon";


export const EditForm = ({id, title, posttype, img,alt, subject, content}) =>{
    const [formText, setFormText] = useState("Edit the <b>title, subject, content, image</b> and select the <b>type</b> of the post.");
    

      //routing
  const router = useRouter()

  const [idState, setId] = useState(id)
    const [inputTitle, setInputTitle] = useState(title)
    const [inputSubject, setInputSubject] = useState(subject)
    const [inputURL, setInputURL] = useState(img)
    const [inputAlt, setInputAlt] = useState(alt)
    const [inputType, setInputType] = useState(posttype)
    const [inputContent, setInputContent] = useState(content)


//state for button error
const [isButtonError, setIsButtonError] = useState(false);
//button color
const buttonColor = isButtonError?errorColor:pryColor
//options
const optionsPost = [
  'Post', 'Lecture', 
]
const optionsSubject = [
  'History', 'Economics', 'Computer Science', 'General'
]
const handleChange = (e, setMethod) => {
  setMethod(e.value)
};
//code for react quill
const addDesc = (value) => {
  setInputContent(value)
}

//if allowed to add post
const uponConfirmation = ()=>{
  fetch(`http://localhost:3000/api/editPost`, {
    method: 'PUT',
    body: JSON.stringify({
      id:idState,
       title:inputTitle,
      subject:inputSubject,
      imgurl:inputURL,
      imgAltText:inputAlt,
    posttype:inputType,
    content: inputContent,
  }),
  });
}




//func to add new post
const editPost= (e)=>{
  e.preventDefault()

  uponConfirmation()
  const encodedTitle = encodeURIComponent(inputTitle);
  router.push(`/edit/${encodedTitle}`)
  }


    return(
        <StyledForm id="form" onSubmit={editPost}>
  <div className="form-text">
    <h2>Edit post</h2>
    <p dangerouslySetInnerHTML={{ __html: formText }}>
    </p>
  </div>


  <div className="form-input">
  <span className="flex">
    <label htmlFor="title"> Title</label>
    </span>
    <input type="text" id="title" value={inputTitle}  onChange={(e) => setInputTitle(e.target.value)}/>
  </div>

  <div className="form-input">
  <span className="flex">

    <label htmlFor="subject"> Subject</label>
    </span>
    <Dropdown options={optionsSubject}  
    id='subject'
    onChange={(val) => handleChange(val, setInputSubject)}
    value={inputSubject}
        placeholder="Select its related subject" 
        className="dropdown" 
        controlClassName="dropdown-control" 
        placeholderClassName="dropdown-placeholder"
        menuClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        arrowClosed={<MdOutlineKeyboardArrowDown className="icon"/>}
  arrowOpen={<MdOutlineKeyboardArrowUp className="icon"/>}
/>
  </div>

  <div className="form-input">
  <span className="flex">

    <label htmlFor="url">Image URL</label>
    </span>
    <input type="text" id="url" value={inputURL}  onChange={(e) => setInputURL(e.target.value)}/>
  </div>

  <div className="form-input">
  <span className="flex">
 
    <label htmlFor="title"> Image alt text</label>
    </span>
    <input type="text" id="title" value={inputAlt}  onChange={(e) => setInputAlt(e.target.value)}/>
  </div>

  <div className="form-input">
  <span className="flex">

    <label htmlFor="type"> Post type</label>
    </span>
    <Dropdown options={optionsPost}  
    id='type'
    onChange={(val) => handleChange(val, setInputType)}
    value={inputType}
        placeholder="Select post type" 
        className="dropdown" 
        controlClassName="dropdown-control" 
        placeholderClassName="dropdown-placeholder"
        menuClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        arrowClosed={<MdOutlineKeyboardArrowDown className="icon"/>}
  arrowOpen={<MdOutlineKeyboardArrowUp className="icon"/>}
/>
  </div>

  <div className="form-input">
  <span className="flex">

    <label htmlFor="content"> Content</label>
    </span>
    <ReactQuill 
    theme="snow"
onChange={addDesc}
value={inputContent}
className='quill'
id='content'/>
    
  </div>

  

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
height: auto;
background: ${pryColor};
color: ${bgColor};
padding: 40px 0;
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
height: 1300px;
gap: 25px;

.ql-toolbar{
    height: 10% !important; 
}

#snow-container, .ql-container{
    height: 90% !important;
    font-size: 10px;
}


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
  width: 55%;
  height: 1500px;

  .ql-toolbar{
    height: 10% !important; 
}

#snow-container, .ql-container{
    height: 90% !important;
    font-size: 13px;
}
  button{
    width: 90%;
  }

  .form-text{
    gap: 15px;

    h2{
      font-size: 20px;
    }
    p{
      font-size: 13px;
    }
  }

  .form-input{
    width: 90%;
    .dropdown-placeholder, .dropdown-menu{
    font-size: 16px;
  }
  }
}

@media (min-width: 992px) and (max-width: 1199px){
  padding: 0;
  align-items: center;
  height: 1500px;

  .ql-toolbar{
    height: 10% !important; 
}

#snow-container, .ql-container{
    height: 90% !important;
}

  button{
    width: 80%;
  }
}

`