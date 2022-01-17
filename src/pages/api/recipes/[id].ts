import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/lib/database";
import { getSession } from "next-auth/react";

/**
 * @swagger
 * /api/recipes/{id}:
 *   delete:
 *     description: Delete a recipe
 *   parameters:
 *     - name: id
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "The user is not authenticated." });
    return;
  }

  if (req.method === "DELETE") {
    if (req?.query?.id) {
      const deleteRecipe = await prisma.recipe.delete({
        where: {
          id: req.query.id,
        },
      });
      if (deleteRecipe) {
        res.status(200).json({ message: "Recipe deleted" });
      }
    } else {
      res.status(400).json({ message: "No recipe id provided." });
    }
  } else {
    res.setHeader("Allow", "DELETE");
    res
      .status(405)
      .json({ message: `Method ${req.method} not allow for this endpoint.` });
  }
};

export default handler;
