import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === 'DELETE') {
        const { body } = req;
            const { id} = JSON.parse(body);


      const deletedPost = await prisma.post.delete({
        where: { id: Number(id) },
      });

      res.json(deletedPost);
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}