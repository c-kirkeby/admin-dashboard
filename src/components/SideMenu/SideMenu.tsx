import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SideMenuProps {
  // children?: React.ReactChildren;
}

const items = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Recipes",
    link: "/recipes",
  },
  {
    label: "Batches",
    link: "/batches",
  },
];

export const SideMenu = ({ children }: SideMenuProps) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      left="0"
      top="0"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      w="60"
      bgColor="white"
      display={["none", "flex"]}
    >
      <Box height="71px" borderBottom="1px" borderColor="gray.200" w="full">
        <Flex
          h="full"
          fontSize="1.85rem"
          fontWeight={600}
          justifyContent="center"
          p={4}
        >
          Demijohn
        </Flex>
        {items.map((item, index) => (
          <Link href={item.link} passHref key={index}>
            <a>
              <Flex
                minH={4}
                margin={4}
                _hover={{
                  bg: "gray.200",
                  color: "gray.600",
                }}
                borderRadius="md"
                p={4}
              >
                <Text>{item.label}</Text>
              </Flex>
            </a>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
