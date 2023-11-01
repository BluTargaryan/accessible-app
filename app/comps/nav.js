'use client'
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { abril } from "../lib/fonts";

export const NavComp = ()=>{

    return(
        <Nav>
       <span>SmartStudy</span>
        </Nav>
    )
}

const Nav = styled(motion.nav)`
width: 100%;
height: 86px;
font-family:${abril.style.fontFamily};
display: flex;
align-items: center;
justify-content: center;
z-index: 10;

span{
    font-size: 31px;
}
`

