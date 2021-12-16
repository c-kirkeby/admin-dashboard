import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from './Sidebar'

const Dashboard = ({ children }) => {
  return (
    <Box backgroundColor="gray.50" h="100vh">
      <Header />
      <Sidebar />
      <Flex margin="0 auto" direction="column" maxW="1200px" px={[0, 8, 8]}>
        {children}
      </Flex>
    </Box>
  );
};

export default Dashboard;
