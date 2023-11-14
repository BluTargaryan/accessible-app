//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { abril } from "../lib/fonts";
import { bgColor, pryColor } from "../lib/colors";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'

import { Post } from "./Post";

import useSWR from 'swr'
 
const fetcher = (...args) => fetch(...args).then((res) => res.json())


export const  Feed = ({usertype})=>{
const router = useRouter()

//states for filters


let [selectedSubject, setSelectedSubject]= useState(null)
let [selectedPostType, setSelectedPostType]= useState(null)


const handleChangeSubject = (e) => {
  setSelectedSubject(e.value)
  if(e.value==='All'){
    setSelectedSubject(null)
  }
};

const handleType = (e) => {
  setSelectedPostType(e.value)
  if(e.value==='All'){
    setSelectedPostType(null)
  }
};

  const optionPostType = [
    'Post', 'Lecture', 'All'
  ];
  const optionSubject = [
    'History', 'Computer Science','Economics','General','All'
  ];

 
 //functo go to add post page
const toAddPost = ()=>{
  router.push('/addPost')
}

const { data, error } = useSWR('/api/getPosts', fetcher)




  return(
    <StyledFeed id="feed">
        <h1>Feed</h1>
        <section aria-label="filters-and-addPostButton" className="filters">
        <div className="filters-main">
        <h2>Filters </h2>
        <Dropdown options={optionPostType}  
        placeholder="Filter post by type" 
        onChange={(val) => handleType(val)}
        className="dropdown" 
        controlClassName="dropdown-control" 
        placeholderClassName="dropdown-placeholder"
        menuClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        arrowClosed={<MdOutlineKeyboardArrowDown className="icon"/>}
  arrowOpen={<MdOutlineKeyboardArrowUp className="icon"/>}
/>
        <Dropdown options={optionSubject}  
        placeholder="Filter post by subject" 
        className="dropdown" 
        onChange={(val) => handleChangeSubject(val)}
        controlClassName="dropdown-control" 
        placeholderClassName="dropdown-placeholder"
        menuClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        arrowClosed={<MdOutlineKeyboardArrowDown className="icon"/>}
  arrowOpen={<MdOutlineKeyboardArrowUp className="icon"/>}/>
        </div>

        {
  (usertype==='Staff') &&
<button className="btn-accent" onClick={()=>toAddPost()}>Add Post</button>
}

        
        </section>

        <section aria-label="post-feed" role="feed" className="feed-main">
          {data &&
            data
            .filter((post) => !selectedPostType || post.posttype === selectedPostType)
            .filter((post) => !selectedSubject || post.subject === selectedSubject)
            .map((post)=>(
<Post
key={post.id}
id={post.id}
title={post.title}
posttype={post.posttype}
img={post.imgurl}
alt={post.imgAltText}
subject={post.subject}
content={post.content}
usertype={usertype}
/>
            ))
          }
        </section>
    </StyledFeed>
  )
}


const StyledFeed = styled(motion.main)`
width: 100%;
height: auto;
padding: 0 32px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
gap: 83px;

h1{
  font-size: 75px;
  font-family: ${abril.style.fontFamily};
}

.filters{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 47px;

  h2{
    font-size: 25px;
    font-weight: 400;
  }

  .filters-main{
    display: flex;
  gap: 98px;
  align-items: center;
  height: 100%;
  width: auto;
  
  .dropdown{
    width: 270px;
    height: 45px;
    border-radius: 6px;
    
  }

  .dropdown-control{
    padding: 0 10px;
    width: 270px;
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
  }

  


.feed-main{
  justify-content: center;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

@media (max-width: 576px) { /* Mobile devices */
 align-items: center;
 gap: 34px;

 h1{
  font-size: 31px;
 }

 .filters{
  height: auto;
  flex-direction: column;
  gap: 20px;

  h2{
    font-size: 20px;
  }

  .filters-main{
    flex-direction: column;
    gap: 20px;
    height: auto;

    .dropdown-placeholder, .dropdown-menu{
      font-size: 16px;
    }
  }

  button{
    height: 36px;
    width: 270px;
  }
 }
}
@media (min-width: 768px) and (max-width: 991px) { /* Medium devices */
align-items: center;
 gap: 34px;
padding: 15px;
 h1{
  font-size: 31px;
 }

 .filters{
  height: auto;
  gap: 20px;

  h2{
    font-size: 16px;
  }

  .filters-main{
    gap: 15px;
    width: 70%;
    height: auto;

    .dropdown,.dropdown-control{
      width: 100%;
    }
    .dropdown-placeholder, .dropdown-menu{
      font-size: 16px;
    }
  }

  button{
    height: 36px;
    font-size: 16px;
  }
 }
  }

  @media (min-width: 992px) and (max-width: 1199px) { /* Large devices */
 gap: 34px;

 .filters{
  gap: 20px;

  h2{
    font-size: 20px;
  }

  .filters-main{
    gap: 20px;

  }




 }
  }

`