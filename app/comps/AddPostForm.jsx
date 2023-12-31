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


export const PostForm = ({usertype}) =>{
    const [formText, setFormText] = useState("Type in the <b>title, subject, content, image</b> and select the <b>type</b> of the new post. You can add images as well to the <b>content</b> section, but make sure it has a text label below it!");
    

      //routing
  const router = useRouter()


    const [isErrorTitle, setIsErrorTitle] = useState(false);
    const [isErrorSubject, setIsErrorSubject] = useState(false);
    const [isErrorURL, setIsErrorURL] = useState(false);
    const [isErrorImgText, setIsErrorImgText] = useState(false);
    const [isErrorType, setIsErrorType] = useState(false);
    const [isErrorContent, setIsErrorContent] = useState(false);

    const [inputTitle, setInputTitle] = useState('')
    const [inputSubject, setInputSubject] = useState('')
    const [inputURL, setInputURL] = useState('')
    const [inputImgText, setInputImgText] = useState('')
    const [inputType, setInputType] = useState('')
    const [inputContent, setInputContent] = useState('')


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
  fetch(`${process.env}/api/createPost`, {
    method: 'POST',
    body: JSON.stringify({
       title:inputTitle,
      subject:inputSubject,
      imgurl:inputURL,
      imgAltText:inputImgText,
    posttype:inputType,
    content: inputContent,
  }),
  });
}

const toggleError = ( setError, fText)=>{
  setError(true)
  document.getElementById('form').classList.add('bgError')
setIsButtonError(true)
  setFormText(fText)
}


//func to add new post
const registerPost= (e)=>{
  e.preventDefault()
  
  if (inputTitle !== '' && inputSubject !== ''&& inputType !== ''&& inputContent !== ''&& inputImgText !== '') {
  uponConfirmation()
  const encodedTitle = encodeURIComponent(inputTitle)
  router.push(`/addPost/${encodedTitle}?usertype=${usertype}`)
  }else{
    if(inputTitle === '') toggleError(setIsErrorTitle, 'You left the <b>title</b> section empty. Please fill it to successfully add a new post.')
    if(inputSubject === '') toggleError(setIsErrorSubject, 'You did not select a <b>subject</b>. Please select one to successfully add a new post.')
    if(inputURL === '') toggleError(setIsErrorURL, 'You left the <b>image</b> section empty. Please fill it to successfully add a new post.')
    if(inputImgText === '') toggleError(setIsErrorImgText, 'You left the <b>alt text</b> section empty. Please fill it to successfully add a new post.')
    if(inputType === '') toggleError(setIsErrorType, 'You did not select a <b>post type</b>. Please select one to successfully add a new post.')
    if(inputContent === '') toggleError(setIsErrorContent, 'You left the <b>content</b> section empty. Please fill it to successfully add a new post.')
  }
  
  
  }


    return(
        <StyledForm id="form" onSubmit={registerPost}>
  <section aria-label='form infotext' className="form-text">
    <h3>New post</h3>
    <p dangerouslySetInnerHTML={{ __html: formText }}>
    </p>
  </section>


  <section aria-label='title' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorTitle}/>
    <label htmlFor="title"> Title</label>
    </span>
    <input type="text" id="title" value={inputTitle}  onChange={(e) => setInputTitle(e.target.value)}/>
  </section>

  <section aria-label='subject' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorSubject}/>
    <label htmlFor="subject"> Subject</label>
    </span>
    <Dropdown options={optionsSubject}  
    tabIndex={0}
    id='subject'
    onChange={(val) => handleChange(val, setInputSubject)}
        placeholder="Select its related subject" 
        className="dropdown" 
        controlClassName="dropdown-control" 
        placeholderClassName="dropdown-placeholder"
        menuClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        arrowClosed={<MdOutlineKeyboardArrowDown className="icon"/>}
  arrowOpen={<MdOutlineKeyboardArrowUp className="icon"/>}
/>
  </section>

  <section aria-label='image url' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorURL}/>
    <label htmlFor="url">Image URL</label>
    </span>
    <input type="text" id="url" value={inputURL}  onChange={(e) => setInputURL(e.target.value)}/>
  </section>

  <section aria-label='image alt text' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorImgText}/>
    <label htmlFor="alttext"> Image alt text</label>
    </span>
    <input type="text" id="alttext" value={inputImgText}  onChange={(e) => setInputImgText(e.target.value)}/>
  </section>

  <section aria-label='post-type' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorType}/>
    <label htmlFor="type"> Post type</label>
    </span>
    <Dropdown options={optionsPost}  
    id='type'
    tabindex="0"
    onChange={(val) => handleChange(val, setInputType)}
        placeholder="Select post type" 
        className="dropdown" 
        controlClassName="dropdown-control" 
        placeholderClassName="dropdown-placeholder"
        menuClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        arrowClosed={<MdOutlineKeyboardArrowDown className="icon"/>}
  arrowOpen={<MdOutlineKeyboardArrowUp className="icon"/>}
/>
  </section>

  <section aria-label='content' className="form-input">
  <span className="flex">
  <ErrorIcon 
    isError={isErrorContent}/>
    <label htmlFor="content"> Content</label>
    </span>
    <ReactQuill 
    theme="snow"
onChange={addDesc}
value={inputContent}
className='quill'
id='content'/>
    
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

    h3{
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
    font-size: 13px;
}

  button{
    width: 80%;
  }
}

`