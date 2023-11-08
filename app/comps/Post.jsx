
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, pryColor } from "../lib/colors";


export const Post = ()=>{

    return(
        <StyledPost></StyledPost>
    )
}


const StyledPost = styled(motion.div)`
    width: 30%;
    height: 285px;
    background: ${pryColor};
    color: ${bgColor};
    
    @media (max-width: 576px){
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 991px) { /* Medium devices */
    width: 45%;
    height: 220px;
  }

  @media (min-width: 992px) and (max-width: 1199px) { /* Large devices */
  height: 220px;
}
`