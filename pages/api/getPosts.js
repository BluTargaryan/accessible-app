import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
    try{
            const data = await prisma.post.findMany();
            return res.status(200).json(data)
    }catch(error){
        return res.status(500).json(error)
    }
  
}