'use client'
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { abril } from "../lib/fonts";

export const NavComp = ()=>{

    return(
        <Nav role="navigation">
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

