import {
  EmailIcon,
  ExternalLinkIcon,
  InfoIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Icon,
  Link,
  Stack,
  StackDivider,
  Text,
  Divider,
} from "@chakra-ui/react";

const ContactCard = ({ contact }) => {
  const { phone, email, company, website, address } = contact;
  const fullAddress = `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`;

  return (
    <Card bg="gray.100" borderRadius="md">
      <CardHeader color="gray.600" bg="blue.200" borderTopRadius="md">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Icon as={InfoIcon} boxSize={4} mr={2} mt={1} />
          <Heading as="h2" size="md">
            Basic Information
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
              Contact Details
            </Heading>
            <Box
              display="flex"
              alignItems="center"
              fontSize={{ base: "sm", md: "sm", lg: "md" }}
            >
              <PhoneIcon mr={2} />
              <Text fontSize="md" color="gray.500">
                {phone}
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <EmailIcon mr={2} />
              <Text fontSize="md">{email}</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <ExternalLinkIcon mr={2} />
              <Link
                href={`https://${website}`}
                color="blue.500"
                fontSize="md"
                isExternal
              >
                {website}
              </Link>
            </Box>
          </Box>
          <Box>
            <Heading
              as="h4"
              size={{ base: "sm", md: "sm", lg: "md" }}
              textTransform="uppercase"
              mb={1}
            >
              Company
            </Heading>
            <Text fontSize="md">{company.name}</Text>
          </Box>
          <Box>
            <Heading
              as="h4"
              size={{ base: "sm", md: "sm", lg: "md" }}
              textTransform="uppercase"
              mb={1}
            >
              Address
            </Heading>
            <Text fontSize="md">{fullAddress}</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ContactCard;
