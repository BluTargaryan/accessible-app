import { Poppins } from "next/font/google";
import {Abril_Fatface} from "next/font/google";


const poppins = Poppins({
  weight: ["400", "500","600","700"],   
  subsets: ["latin"],
});



const abril = Abril_Fatface({
  weight: "400", 
  subsets: ["latin"],
});

export { poppins, abril };