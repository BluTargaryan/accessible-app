'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, errorColor, txtColor } from "../lib/colors";

import { useRouter, useSearchParams } from "next/navigation";
import { abril } from "../lib/fonts";

export default function Confirmation(){
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const title = searchParams.get('title')

    const router = useRouter();

    const caseNo = () =>{
        router.back()
    }

    const caseYes = () =>{
          router.push(`/`)
    }
    return(
        <StyledConfirm>
            <p>Are you sure you want to logout of</p>
<h1>SmartStudy</h1>
<section aria-label="buttons" className="buttons">
<button onClick={()=>caseNo()}>No, go back</button>
<button id="btn" onClick={()=>caseYes()}>Yes, logout</button>
</section>

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
        font-family: ${abril.style.fontFamily};
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

    @media (max-width: 576px){
    gap: 40px;

    h1,p{
        width: 80%;
    }

    .buttons{
        width: 90%;
    }
    h1{
        font-size: 39px;
        
    }

    p{
        font-size: 25px;
    }
    }

    @media (min-width: 768px) and (max-width: 991px){
        gap: 40px;

    h1,p{
        width: 80%;
    }

    .buttons{
        width: 90%;
    }

    h1{
        font-size: 39px;
        
    }

    p{
        font-size: 25px;
    }
    }

    @media (min-width: 992px) and (max-width: 1199px){
        gap: 35px;

h1,p{
    width: 70%;
}

h1{
    font-size: 39px;
    
}

p{
    font-size: 25px;
}
    }
`