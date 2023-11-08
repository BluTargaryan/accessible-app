'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, errorColor, txtColor } from "../lib/colors";

export default function Confirmation(){


    return(
        <StyledConfirm>
            <p>Are you sure you want to delete post with title:</p>
<h1>Subject title for post</h1>
<div className="buttons">
<button>No, do not delete</button>
<button id="btn">Yes, delete it</button>
</div>

        </StyledConfirm>
    )
}

const StyledConfirm = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background: ${errorColor};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 55px;
    color: ${bgColor};


    h1{
        font-size: 61px;
        width: 70%;
        text-align: center;
    }
    p{
        font-size: 39px;
        width: 70%;
        text-align: center;
    }
    .buttons{
        width: 40%;
        display: flex;
        justify-content: space-between;
        gap: 44px;

        button{
            flex: 1;
            color: ${errorColor} !important;
        }

        #btn{
            background: none;
            border: none;
            border-bottom: 4px solid ${bgColor};
            color: ${bgColor} !important;
            box-shadow: none;
            border-radius: 0px;

            &:focus{
                border: 3px solid ${bgColor};
                background  :${txtColor} ;
                border-radius: 6px;
            }

            &:hover{
                border: 3px solid ${bgColor};
                border-radius: 6px;
            }
            &:active{
              background  :${txtColor} ;
              border: none;
            }
        }
    }
`