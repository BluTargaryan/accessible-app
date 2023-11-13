'use client'
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

//router
import { useRouter } from 'next/navigation'

import {MdOutlineArrowUpward, MdOutlineLogout} from 'react-icons/md'

import { abril ,poppins} from "../lib/fonts";
import { bgColor, pryColor } from "../lib/colors";

export const HomeNav = ()=>{
    //routing
  const router = useRouter()

    //func to scroll to top

const scrollToTop = () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
}

//func to logout

const logOut = () =>{
    router.push('/logout')
    
}

    return(
        <Nav>
            <span className="flex border" onClick={()=>scrollToTop()}>
            <span id="logo">SmartStudy</span>
            <MdOutlineArrowUpward className="icon-pry"/>
            </span>
       
            <span className="flex border" onClick={()=>logOut()}>
            <span>Logout</span>
            <MdOutlineLogout className="icon-pry"/>
            </span>
        </Nav>
    )
}

const Nav = styled(motion.nav)`
background: ${bgColor};
width: 100%;
height: 86px;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 10;
padding: 0 40px;
position: fixed;
top: 0;
left: 0;
z-index: 5;

.logo{
    font-family:${abril.style.fontFamily};
}

span{
    font-size: 25px;
    cursor: pointer;
}

.border{


    &:hover{
        border-bottom: 3px solid ${pryColor};
    }
}


@media (max-width: 576px){
    padding: 10px;
    span{
        font-size: 16px;
        gap: 5px;
    }
}

@media (min-width:577px)and  (max-width:992px){
   
    span{
        font-size: 20px;
        
    }
}
`

