import { Spinner, Flex, Center } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex h="100vh">
      <Center mx="auto">
        <Spinner></Spinner>
      </Center>
    </Flex>
  );
};
