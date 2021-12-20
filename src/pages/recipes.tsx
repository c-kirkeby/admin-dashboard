import Page from "../components/Page";

const name = "Recipes";

const Index = () => {
  return <Page name={name} path={"/"}></Page>;
};

Index.protected = true;

export default Index;
