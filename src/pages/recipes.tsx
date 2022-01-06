import { Box, Button, Table, Thead, Tbody, Td, Tr, Th } from "@chakra-ui/react";
import Link from "next/link";
import { Page } from "src/components";
import data from "db.json";
import { capitalise, formatDatetime } from "src/utils/helpers";

const name = "Recipes";

const Index = () => {
  return (
    <Page name={name} path={"/"}>
      <Box boxShadow="md" overflowX="auto" marginLeft={[-8, 0]}>
        <Table variant="simple">
          <Thead
            borderTopRightRadius="5px"
            borderTopLeftRadius="5px"
            bg="gray.50"
          >
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Created At</Th>
              <Th aria-hidden></Th>
            </Tr>
          </Thead>
          <Tbody bg="white" fontSize="sm" color="gray.600">
            {data.recipes.map((item) => (
              <Tr key={item._id}>
                <Td fontWeight="600">{item.name}</Td>
                <Td>{capitalise(item.type)}</Td>
                <Td>{formatDatetime(item.createdAt)}</Td>
                <Td>
                  <Link href={`/recipes/${item._id}`} passHref>
                    <a>
                      <Button colorScheme="purple" variant="link" size="sm">
                        EDIT
                      </Button>
                    </a>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Page>
  );
};

Index.protected = true;

export default Index;
