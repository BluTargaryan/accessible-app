'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, successColor } from "../lib/colors";
import { useRouter, useSearchParams } from "next/navigation";

export default function Success(){
    const searchParams = useSearchParams()
    const title = decodeURIComponent(searchParams.get('title'))
    const usertype = decodeURIComponent(searchParams.get('usertype'))
    

    const router = useRouter();



    return(
        <StyledSuccess>
<h1>{title}</h1>
<p>has been deleted successfully.</p>
<button onClick={()=>router.push(`/landing?usertype=${encodeURIComponent(usertype)}`)}>Continue</button>
        </StyledSuccess>
    )
}

const StyledSuccess = styled(motion.div)`
    width: 100%;
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

    @media (max-width: 576px){
    gap: 40px;

    h1,p,button{
        width: 80%;
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

    h1,p,button{
        width: 80%;
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