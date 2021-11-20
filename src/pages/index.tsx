import Page from "../components/Page";
import Dashboard from "../components/Dashboard";

const Index = () => {
  return (
    <Page name="Home" path={"/"}>
      <Dashboard>Hello</Dashboard>
    </Page>
  );
};

Index.protected = true;

export default Index;
