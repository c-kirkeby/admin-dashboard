import { Flex, Avatar } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <Flex backgroundColor="white" mb={[8, 16]} w="full">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pt={4}
        pb={4}
        maxW="1200px"
        margin="0 auto"
        w="full"
        px={8}
        h="70px"
      >
        <Flex align="center"></Flex>
        <Flex justifyContent="center" alignItems="center">
          <Avatar size="sm" src={session?.user?.image || undefined} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
