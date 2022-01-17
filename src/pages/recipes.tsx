import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Skeleton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "src/utils/fetcher";
import { Page } from "src/components";
import { capitalise } from "src/utils/helpers";
import format from "date-fns/format";

const name = "Recipes";

const Index = () => {
  const { data, error } = useSWR("/api/recipes", fetcher);

  const SkeletonRow = () => (
    <Tr>
      <Td w="100%">
        <Skeleton height="1rem" />
      </Td>
      <Td w="100%">
        <Skeleton height="1rem" />
      </Td>
      <Td w="100%">
        <Skeleton height="1rem" />
      </Td>
      <Td minW={13}>
        <Skeleton height="1rem" />
      </Td>
    </Tr>
  );

  const SkeletonTable = () => (
    <>
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
    </>
  );

  return (
    <Page name={name} path={"/recipes"}>
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
              <Th>{"\u00A0"}</Th>
            </Tr>
          </Thead>
          <Tbody bg="white" fontSize="sm" color="gray.600">
            {data ? (
              <>
                {data?.map((item) => (
                  <Tr key={item.id}>
                    <Td fontWeight="600">{item.name}</Td>
                    <Td max={200}>{capitalise(item.type.name)}</Td>
                    <Td>
                      {format(new Date(item.createdAt), "d/MM/yyyy HH:mm")}
                    </Td>
                    <Td>
                      <Link href={`/recipes/${item._id}`} passHref>
                        <ChakraLink>
                          <Button colorScheme="purple" variant="link" size="sm">
                            EDIT
                          </Button>
                        </ChakraLink>
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </>
            ) : (
              <SkeletonTable />
            )}
          </Tbody>
        </Table>
      </Box>
    </Page>
  );
};

Index.protected = true;

export default Index;
