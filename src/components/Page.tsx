import { NextSeo } from "next-seo";

const Page = ({ name, path, children }) => {
  const url = `https://localhost:3000${path}`;
  const title = `Admin Dashboard - ${name}`;
  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      {children}
    </>
  );
};
export default Page;
