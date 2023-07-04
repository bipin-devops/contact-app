import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

export default function SearchBar({ onSearch }) {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <Flex align="center" width="100%" mt={4} position="sticky" top={8}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          fontSize={{ base: "9pt", md: "10pt", lg: "12pt" }}
          border="1px solid"
          borderColor="gray.300"
          _placeholder={{ color: "gray.500", fontSize: "md" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "gray.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "gray.500",
          }}
          height="40px"
          bg="gray.50"
          onChange={handleInputChange}
        />
      </InputGroup>
      <Box align="center" ml={3}>
        <Button variant="primary">
          <AddIcon fontSize={{ base: "xs", md: "md" }} color="white" />
        </Button>
      </Box>
    </Flex>
  );
}
