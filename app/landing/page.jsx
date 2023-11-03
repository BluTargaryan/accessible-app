'use client'
import { HomeNav } from "../comps/homenav"
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import Image from 'next/image'

import heroImg from '../images/students.jpg'
import { abril } from "../lib/fonts";

export default function Landing(){

    return(
        <StyledPage>
<HomeNav/>

<header>
<div className="hero">
<h1>Welcome to <span id="logo">SmartStudy</span>, the home of online learning! </h1>
<div className="buttons">
<button className="btn-pry">Go to Feed</button>
<button className="btn-accent">Add User</button>
</div>
</div>

<Image
src={heroImg} 
alt="Three students studying at a table with laptops, engrossed in their work, focused and determined."
/>

</header>
        </StyledPage>
    )
}

const StyledPage = styled(motion.div)`
    width: 100%;
    height: auto;
    position: relative;
    padding-top: 86px;

    header{
        height: 602px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .hero{
            width: 42%;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 55px;
            padding-left: 40px;

            h1{
              font-size: 49px;
              font-weight: 400;
                #logo{
                    font-family: ${abril.style.fontFamily};
                }
            }

            .buttons{
            display: flex;
            gap: 20px;
        }
        }

       img{
        height: 100%;
        width: auto;
       }
    }
`