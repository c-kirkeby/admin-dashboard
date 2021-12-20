import Page from "../components/Page";

const name = "Batches";

const Index = () => {
  return <Page name={name} path={"/"}></Page>;
};

Index.protected = true;

export default Index;
