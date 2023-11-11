import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
    try{
        if (req.method === 'PUT') {
            const { body } = req;
            const { id, ...data } = JSON.parse(body);
            
            // Assuming 'id' is provided in the request body to identify the post to be updated
            const post = await prisma.post.update({
                where: { id: Number(id) },
                data,
            });

            res.json(post);
          }
    }catch(error){
        console.log(error)
    }finally {
        await prisma.$disconnect();
    }
  
}