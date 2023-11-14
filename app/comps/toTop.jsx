//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import {MdOutlineArrowUpward} from 'react-icons/md'
import { pryColor ,bgColor, txtColor} from "../lib/colors";

export const ToTop = () =>{
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
    }

    return(
        <StyledTop onClick={()=>scrollToTop()}>
<MdOutlineArrowUpward className="icon" alt="Scroll to top of window"/>
        </StyledTop>
    )
}

const StyledTop = styled(motion.div)`
    width: 50px;
    height: 50px;
    position: fixed;
    z-index: 20;
    right: 50px;
    bottom: 50px;
    background-color: ${pryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    cursor: pointer;
    transition: .2s ease-in;

    &:hover{
        box-shadow: 8px 0px 8px 0px rgba(126, 166, 241, 0.25), -8px 0px 8px 0px rgba(126, 166, 241, 0.25), 0px -8px 8px 0px rgba(126, 166, 241, 0.25), 0px 8px 8px 0px rgba(126, 166, 241, 0.25);
    }

    &:active{
        background: ${txtColor};
        color: ${bgColor};
    }
`