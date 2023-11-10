import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
    try{
        if (req.method === 'POST') {
            const { body } = req;
            const post = await prisma.post.create({ data: JSON.parse(body) });
            res.json(post);
          }
    }catch(error){
        console.log(error)
    }
  
}