import Page from "../components/Page";

const name = "Dashboard";

const Index = () => {
  return <Page name={name} path={"/"}></Page>;
};

Index.protected = true;

export default Index;
