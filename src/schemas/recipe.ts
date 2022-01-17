import { object, string } from "yup";

const recipeSchema = object({
  name: string().required(),
  type: string().lowercase().required(),
});

export default recipeSchema;
