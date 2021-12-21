import { Box, Flex } from "@chakra-ui/react";
import { SideMenuLinks } from "src/components";
import { menuConfig } from "src/utils/config";

export const SideMenu = () => {
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
        <SideMenuLinks items={menuConfig} />
      </Box>
    </Box>
  );
};
