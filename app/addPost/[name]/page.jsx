'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, successColor } from "@/app/lib/colors";
import { useRouter } from "next/navigation";

import { useParams } from "next/navigation";

export default function Success(){
    const params = useParams();
    const name = params.name
const decodedTitle = decodeURIComponent(name)
    const router = useRouter()

    const routeToHome = ()=>{
router.push('/landing')
    }
    return(
        <StyledSuccess>
<h1>New post successfully added!</h1>
<p>Subject: {decodedTitle} has been added successfully.</p>
<button onClick={()=>routeToHome()}>Go to Home</button>
        </StyledSuccess>
    )
}

const StyledSuccess = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background: ${successColor};
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
    button{
        width: 40%;
        color: ${successColor};
    }
`