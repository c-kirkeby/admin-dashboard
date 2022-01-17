import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/lib/database";
import { getSession } from "next-auth/react";
import recipeSchema from "src/schemas/recipe";

/**
 * @swagger
 * /api/recipes:
 *   get:
 *     description: Returns Recipes that you have access to
 *     responses:
 *       200:
 *         description: Successful response with recipes
 *       401:
 *         description: User is not logged in.
 *   post:
 *     description: Create a new recipe
 *     responses:
 *       201:
 *         description: Recipe created successfully
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "The user is not authenticated." });
    return;
  }

  if (req.method === "GET") {
    const recipes = await prisma.recipe.findMany({
      include: { type: true },
    });
    res.status(200).json(recipes);
  } else if (req.method === "POST") {
    const { name, type } = await recipeSchema.validate(req.body);
    const createRecipe = await prisma.recipe.create({
      data: {
        name,
        type: {
          connect: {
            name: type,
          },
        },
        createdBy: {
          connect: {
            id: session?.user?.id,
          },
        },
      },
      include: { type: true },
    });
    res.status(201).json(createRecipe);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res
      .status(405)
      .json({ message: `Method ${req.method} not allow for this endpoint.` });
  }
};

export default handler;
