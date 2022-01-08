export const capitalise = (input: string) => {
  if (typeof input !== "string") return "";
  return input.charAt(0).toUpperCase() + input.slice(1);
};
