'use client'
import { HomeNav } from "../comps/homenav"
import { Feed } from "../comps/Feed";
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import Image from 'next/image'

import heroImg from '../images/students.jpg'
import { abril } from "../lib/fonts";

//router
import { useRouter, useSearchParams } from 'next/navigation'

import { ToTop } from "../comps/toTop";
import { useState, useEffect } from "react";

export default function Landing(){
      //routing
      const router = useRouter()
//func to scroll to feed
const scrolltoFeed = () =>{
    document.getElementById('feed').scrollIntoView({behavior:'smooth',})
}
//func to add user
const addUser = ()=>{
  router.push(`/addUser?usertype=${encodeURIComponent(usertype)}`)
}



const searchParams = useSearchParams()
    const usertype = decodeURIComponent(searchParams.get('usertype'))

//to control view of scroll elements
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollThreshold = 200;
    const isPastThreshold = window.scrollY < scrollThreshold;
    setIsVisible(!isPastThreshold);
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

    return(
        <StyledPage>
         
<HomeNav/>
{
  isVisible && <ToTop/>
}

<header role="banner">
<section aria-label="introText" className="hero">
<p>Welcome to <span id="logo">SmartStudy</span>, the home of online learning! </p>
<section aria-label="buttons" className="buttons">
<button className="btn-pry" onClick={()=>scrolltoFeed()}>Go to Feed</button>
{
  (usertype==='Staff') &&
  <button className="btn-accent" onClick={()=>addUser()}>Add User</button>
}

</section>
</section>

<Image
src={heroImg} 
alt="Three students studying at a table with laptops, engrossed in their work, focused and determined."
/>

</header>
<Feed 
usertype={usertype}/>
        </StyledPage>
    )
}

const StyledPage = styled(motion.div)`
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 50px;

    header{
        height: 602px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 100px;

        .hero{
            width: 42%;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 55px;
            padding-left: 40px;

            p{
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

    @media (max-width: 576px) { 
        /* Mobile devices */
       
    header {
        height: 250px;
      img {
        display: none; 
      }
      .hero{
        gap: 20px;
        width: 100%;
        padding: 0;
        align-items: center;
        justify-content: center;

        p{
            width: 80%;
            font-size: 25px;
            text-align: center;
        }
        .buttons{
            width: 100%;
            gap: 0;
                justify-content: space-between;
                align-items: center;
                padding: 0 2%;

            button{
                width: 45%;
               
            }
        }
      }
    }
  }

 

  @media (min-width: 768px) and (max-width: 991px) { /* Medium devices */
  header {
        height: 250px;
      img {
        
      }
      .hero{
        gap: 20px;

        p{
            width: 100%;
            font-size: 25px;
        }
        .buttons{
            width: 100%;
            gap: 20px;
                padding: 0 2%;

            button{
                width: 45%;
               
            }
        }
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) { /* Large devices */
  header {
        height: 400px;
      img {
        
      }
      .hero{

        p{
            font-size: 39px;
        }
        .buttons{
            width: 100%;
            gap: 20px;

            button{
                width: 45%;
               
            }
        }
      }
    }
  }

  
`