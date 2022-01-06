import { Flex } from "@chakra-ui/react";

interface DashboardProps {
  children?: React.ReactNode;
}

export const Dashboard = ({ children }: DashboardProps) => {
  return (
    <Flex
      ml={[8, 64]}
      direction="column"
      w="100% - 70px"
      alignItems="center"
      px={[0, 8, 8]}
    >
      {children}
    </Flex>
  );
};
