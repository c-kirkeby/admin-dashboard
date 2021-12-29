import { NextSeo } from "next-seo";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { SideMenu, Header, Dashboard } from "src/components";

interface PageProps {
  name: string;
  path: string;
  children: React.ReactNode;
}

export const Page = ({ name, path, children }: PageProps) => {
  const url = `${URL}${path}`;
  const title = `Admin Dashboard - ${name}`;
  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <Box backgroundColor="gray.100" h="100vh">
        <Header />
        <SideMenu />
        <Dashboard>
          <Box maxW="1200" w="100%">
            <Heading mb={4}>{name}</Heading>
            <Flex mx="auto" direction="column">
              {children}
            </Flex>
          </Box>
        </Dashboard>
      </Box>
    </>
  );
};
