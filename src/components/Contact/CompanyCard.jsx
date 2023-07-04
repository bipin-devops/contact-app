import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Icon,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { SlOrganization } from "react-icons/sl";

const CompanyCard = ({ company }) => {
  const { name, catchPhrase, bs } = company;
  return (
    <Card bg="gray.100" borderRadius="md" height="100%">
      <CardHeader color="gray.600" bg="blue.200" borderTopRadius="md">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Heading as="h2" size="md">
            Current Company
          </Heading>
        </Box>
      </CardHeader>

      <CardBody color="gray.500">
        <Stack spacing="4" divider={<StackDivider />}>
          <Box>
            <Heading
              as="h4"
              size={{ base: "sm", md: "sm", lg: "md" }}
              textTransform="uppercase"
              mb={1}
            >
              Company Name
            </Heading>
            <Box
              display="flex"
              alignItems="center"
              fontSize={{ base: "sm", md: "sm", lg: "md" }}
              color="gray.500"
            >
              <Icon as={SlOrganization} color="" mr={2} />
              <Text fontSize="md">{name}</Text>
            </Box>
          </Box>
          <Box>
            <Heading
              as="h4"
              size={{ base: "sm", md: "sm", lg: "md" }}
              textTransform="uppercase"
              mb={1}
            >
              Slogan
            </Heading>
            <Text fontSize="md">{catchPhrase}</Text>
          </Box>
          <Box>
            <Heading
              as="h4"
              size={{ base: "sm", md: "sm", lg: "md" }}
              textTransform="uppercase"
              mb={1}
            >
              Services
            </Heading>
            <Text fontSize="md">{bs}</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CompanyCard;
