import { NextSeo } from "next-seo";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SideMenu, Header, Dashboard } from "src/components";

interface PageProps {
  name: string;
  path: string;
  children: React.ReactChildren;
}

export const Page = ({ name, path, children }: PageProps) => {
  const url = `${URL}${path}`;
  const title = `Admin Dashboard - ${name}`;
  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <Box backgroundColor="gray.50" h="100vh">
        <Header />
        <SideMenu />
        <Flex ml={[8, 64]} direction="column" maxW="1200px" px={[0, 8, 8]}>
          <Dashboard>
            <>
              <Heading>{name}</Heading>
              {children}
            </>
          </Dashboard>
        </Flex>
      </Box>
    </>
  );
};
