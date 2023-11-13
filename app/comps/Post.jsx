
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, errorColor, pryColor, pryShadeColor } from "../lib/colors";


import { useRouter } from "next/navigation";

import {MdEdit,MdDelete} from 'react-icons/md'



export const Post = ({id, title, posttype, img, alt, subject, content, usertype})=>{
    const router = useRouter()


const toEdit = () =>{
   console.log(content)
    const encodedContent = encodeURIComponent(content);
    router.push(`/edit?id=${id}&title=${title}&posttype=${posttype}&img=${img}&subject=${subject}&content=${encodedContent}&alt=${alt}`)
}

const toDelete = () =>{
    router.push(`/confirmation?id=${id}&title=${title}`)
}

const toReader = () =>{
    router.push(`/reader?title=${encodeURIComponent(title)}&subject=${encodeURIComponent(subject)}&content=${encodeURIComponent(content)}`)
}

    return(
        <StyledPost>
            <div className="title-div" onClick={()=>toReader()}>
<span className="title">{title}</span>
<span className="post-type">{posttype}</span>
            </div>
            <div className="image" onClick={()=>toReader()}>
            <img src={img} alt={alt}/>
            </div>

            {
  (usertype==='Staff') &&
<div className="post-tools">
    <span className="edit" onClick={()=>toEdit()}>
    <MdEdit/>
    <p>Edit</p>
    </span>
    <span className="delete" onClick={()=>toDelete()}>
    <MdDelete/>
    <p>Delete</p>
    </span>
</div>
}

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
            cursor: pointer;
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