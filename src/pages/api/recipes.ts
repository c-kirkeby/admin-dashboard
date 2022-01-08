import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/lib/database";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const recipes = await prisma.recipe.findMany({
      include: { type: true },
    });
    res.status(200).json(recipes);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
