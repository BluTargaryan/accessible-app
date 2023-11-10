
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, errorColor, pryColor, pryShadeColor } from "../lib/colors";
import Image from "next/image";

import {MdEdit,MdDelete} from 'react-icons/md'


export const Post = ({id, title, posttype, img})=>{

    const url = 'https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return(
        <StyledPost>
            <div className="title-div">
<span className="title">{title}</span>
<span className="post-type">{posttype}</span>
            </div>
            <div className="image">
            <img src={img} alt={`Filler image for the title: ${title}`}/>
            </div>
<div className="post-tools">
    <span className="edit">
    <MdEdit/>
    <p>Edit</p>
    </span>
    <span className="delete">
    <MdDelete/>
    <p>Delete</p>
    </span>
</div>
        </StyledPost>
    )
}


const StyledPost = styled(motion.div)`
    width: 30%;
    height: 285px;

    color: ${bgColor};
    border-radius: 6px;
    overflow: hidden;
    &:hover{
        box-shadow: 8px 0px 8px 0px rgba(126, 166, 241, 0.25), -8px 0px 8px 0px rgba(126, 166, 241, 0.25), 0px -8px 8px 0px rgba(126, 166, 241, 0.25), 0px 8px 8px 0px rgba(126, 166, 241, 0.25);
    }
    .title-div{
        cursor: pointer;
        width: 100%;
        height: 20%;
        background: ${pryColor};
        color: ${bgColor};
        display: flex;
        justify-content: space-between;

        span{
            height: 100%;
            font-size: 16px;
        }
        .title{
            width: 80%;
            padding-left: 10px;
            display: flex;
            align-items: center;
            white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
        }
        .post-type{
            width: 20%;
            background-color: ${pryShadeColor};
            color: ${pryColor};
            display: flex;
            align-items: center;
            justify-content: center;
        }


    }
.image{
    height: 60%;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img{
        height: auto;
    width: 100%;
    }

}
    .post-tools{
        width: 100%;
        height: 20%;
        background-color: ${bgColor};
        display: flex;
        justify-content: space-between;

        span{
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 16px;
        }
.edit{
    color: ${pryColor};

    &:hover{
        border-bottom: 3px solid ${pryColor};
    }
}

.delete{
    color: ${errorColor};

    &:hover{
        border-bottom: 3px solid ${errorColor};
    }
}


    }
    
    @media (max-width: 576px){
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 991px) { /* Medium devices */
    width: 45%;
    height: 220px;
  }

  @media (min-width: 992px) and (max-width: 1199px) { /* Large devices */
  height: 220px;

  .title-div{
    .post-type{
    width: 30%;
  }

  .title{
    width: 70%;
  }
  }

 
}
`