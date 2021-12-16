import { Box, Flex } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <Box as="nav" pos="fixed" left="0" top="0" h="full" overflowX="hidden" overflowY="auto" borderRightWidth="1px" w="60" bgColor="white" display="flex">
      <Box height="71px" borderBottom="1px" borderColor="gray.200" w="full">
        <Flex h="full" p={4}>Demijohn</Flex>
      </Box>
    </Box>
  )
}

export default Sidebar
