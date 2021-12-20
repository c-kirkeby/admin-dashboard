import {
  Box,
  Flex,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import { FiChevronDown } from "react-icons/fi";

export const Header = () => {
  const { data: session } = useSession();
  return (
    <Flex
      backgroundColor="white"
      mb={[8, 16]}
      w="full"
      borderBottomWidth="1px"
      borderColor="gray.200"
    >
      <Box
        alignItems="center"
        justifyContent="space-between"
        pt={4}
        pb={4}
        display="flex"
        margin="0 auto"
        w="full"
        px={8}
        h="70px"
      >
        <Text fontSize="1.85rem" fontWeight={600} display={["flex", "none"]}>
          Demijohn
        </Text>
        <Flex align="center"></Flex>
        <Menu>
          <MenuButton>
            <Flex justifyContent="center" alignItems="center">
              <HStack>
                <Avatar size="xs" src={session?.user?.image ?? undefined} />
                <Text fontSize="sm" fontWeight="600" align="center">
                  {session?.user?.name}
                </Text>
                <FiChevronDown />
              </HStack>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
