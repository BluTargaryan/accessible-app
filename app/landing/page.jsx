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

export default function Landing(){
      //routing
      const router = useRouter()
//func to scroll to feed
const scrolltoFeed = () =>{
    document.getElementById('feed').scrollIntoView({behavior:'smooth',})
}
//func to add user
const addUser = ()=>{
  router.push('/addUser')
}



const searchParams = useSearchParams()
    const usertype = decodeURIComponent(searchParams.get('usertype'))




    return(
        <StyledPage>
<HomeNav/>

<header>
<div className="hero">
<h1>Welcome to <span id="logo">SmartStudy</span>, the home of online learning! </h1>
<div className="buttons">
<button className="btn-pry" onClick={()=>scrolltoFeed()}>Go to Feed</button>
{
  (usertype==='Staff') &&
  <button className="btn-accent" onClick={()=>addUser()}>Add User</button>
}

</div>
</div>

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

        h1{
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

        h1{
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

        h1{
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