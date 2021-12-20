import { Page } from "src/components";

const name = "Dashboard";

const Index = () => {
  return <Page name={name} path={"/"}></Page>;
};

Index.protected = true;

export default Index;
