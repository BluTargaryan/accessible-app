import { MdError } from "react-icons/md";

export const ErrorIcon = ({isError})=>{

    return(
        <>
        {
            isError && <MdError className="icon"/>
        }
</>
    )
    

}