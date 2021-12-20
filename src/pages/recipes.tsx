import { Page } from "src/components";

const name = "Recipes";

const Index = () => {
  return <Page name={name} path={"/"}></Page>;
};

Index.protected = true;

export default Index;
