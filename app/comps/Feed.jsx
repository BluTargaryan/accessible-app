//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { abril } from "../lib/fonts";
import { bgColor, pryColor } from "../lib/colors";

import { useRouter } from "next/navigation";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'

import { Post } from "./Post";

export const Feed = ()=>{
const router = useRouter()

  const optionPostType = [
    'Post', 'Lecture'
  ];
  const optionSubject = [
    'History', 'Computer Science','Economics'
  ];

 
 //functo go to add post page
const toAddPost = ()=>{
  router.push('/addPost')
}

  return(
    <StyledFeed id="feed">
        <h1>Feed</h1>
        <div className="filters">
        <div className="filters-main">
        <h2>Filters </h2>
        <Dropdown options={optionPostType}  
        placeholder="Filter post by type" 
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
        controlClassName="dropdown-control" 
        placeholderClassName="dropdown-placeholder"
        menuClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
        arrowClosed={<MdOutlineKeyboardArrowDown className="icon"/>}
  arrowOpen={<MdOutlineKeyboardArrowUp className="icon"/>}/>
        </div>

        <button className="btn-accent" onClick={()=>toAddPost()}>Add Post</button>
        </div>

        <div className="feed-main">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    </StyledFeed>
  )
}


const StyledFeed = styled(motion.section)`
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
  }
 }
}
@media (min-width: 768px) and (max-width: 991px) { /* Medium devices */
align-items: center;
 gap: 34px;

 h1{
  font-size: 31px;
 }

 .filters{
  height: auto;
  gap: 20px;

  h2{
    font-size: 20px;
  }

  .filters-main{
    gap: 20px;
    height: auto;

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