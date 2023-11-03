'use client'
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import {MdOutlineArrowUpward, MdOutlineLogout} from 'react-icons/md'

import { abril ,poppins} from "../lib/fonts";
import { bgColor, pryColor } from "../lib/colors";

export const HomeNav = ()=>{

    return(
        <Nav>
            <span className="flex border">
            <span id="logo">SmartStudy</span>
            <MdOutlineArrowUpward className="icon-pry"/>
            </span>
       
            <span className="flex border">
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
position: absolute;
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
    span{
        font-size: 20px;
    }
}

@media (min-width:577px)and  (max-width:992px){
    span{
        font-size: 25px;
    }
}
`

