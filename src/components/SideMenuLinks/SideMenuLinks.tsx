import Link from "next/link";
import { useRouter } from "next/router";
import { Flex, Text } from "@chakra-ui/react";

interface Item {
  label: string;
  link: string;
}

interface SideMenuLinksProps {
  items: Item[];
}

export const SideMenuLinks = ({ items }: SideMenuLinksProps) => {
  const router = useRouter();

  const isActive = (link: string) => router.pathname === link;

  return (
    <>
      {items.map((item, index) => (
        <Link href={item.link} passHref key={index}>
          <a>
            <Flex
              minH={4}
              margin={4}
              bg={isActive(item.link) ? "purple.600" : "inherit"}
              color={isActive(item.link) ? "gray.100" : "inherit"}
              _hover={{
                bg: isActive(item.link) ? "purple.800" : "gray.200",
                color: isActive(item.link) ? "gray.100" : "gray.600",
              }}
              borderRadius="md"
              p={4}
            >
              <Text>{item.label}</Text>
            </Flex>
          </a>
        </Link>
      ))}
    </>
  );
};
