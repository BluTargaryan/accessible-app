'use client'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { FormNav } from "../comps/formnav";

import { useSearchParams } from "next/navigation";

export default function Reader(){
    const searchParams = useSearchParams()
    const content = decodeURIComponent(searchParams.get('content'))
    const subject = decodeURIComponent(searchParams.get('subject'))
    const title = decodeURIComponent(searchParams.get('title'))

    return(
        <StyledPage>
<FormNav/>
<article className="reader-main">
    <h1>{title}</h1>
    <h2>Subject: {subject}</h2>
    <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
</article>
        </StyledPage>
    )
}

const StyledPage = styled(motion.div)`
    width: 100vw;
    height: auto;

.reader-main{
    width: 80%;
    margin: 100px auto;
    margin-top: 100px;
    display: flex;
flex-direction: column;
gap: 15px;

h1{
    font-size: 39px;
}

h2{
    font-size: 31px;
    font-weight: 400;
}

.content{
    width: 100%;
    font-size: 20px;
    text-align: justify;
    
    img{
        width: 60%;
    }
}


}

@media (max-width: 576px){
    .reader-main{
        width: 85%;
        gap: 10px;

        h1{
            font-size: 25px ;
        }
        h2{
            font-size: 16px;
        }
        .content{
            font-size: 13px;
           

            img{
        width: 100%;
    }
        }
    }
}

@media (min-width: 768px) and (max-width: 991px){
    .reader-main{
        .content{
            font-size: 16px;
           

            img{
        width: 100%;
    }
    }
}
}

@media (min-width: 992px) and (max-width: 1199px){
    .reader-main{
        .content{
            img{
        width: 80%;
    }
    }
}
}
`