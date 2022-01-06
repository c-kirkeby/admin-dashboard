import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { SideMenuLinks } from "src/components";
import { useSession, signOut } from "next-auth/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { menuConfig } from "src/utils/config";

export const Header = () => {
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        px={[4, 8]}
        h="70px"
      >
        <Text fontSize="1.25rem" fontWeight={600} display={["flex", "none"]}>
          Demijohn
        </Text>
        <Box></Box> {/** Spacer */}
        <Flex align="center">
          <Menu>
            <MenuButton>
              <Flex justifyContent="center" alignItems="center">
                <HStack>
                  <Avatar size="xs" src={session?.user?.image ?? undefined} />
                  <Text
                    display={["none", "inline-flex"]}
                    fontSize="sm"
                    fontWeight="600"
                    align="center"
                  >
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
          <Button
            display={["inline-flex", "none"]}
            bg="none"
            minW={2}
            minH={2}
            m={2}
            onClick={onOpen}
          >
            <FiMenu />
          </Button>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent p={2}>
              <DrawerCloseButton size="md" m={4} />
              <DrawerHeader />
              <DrawerBody>
                <SideMenuLinks items={menuConfig} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </Flex>
  );
};
