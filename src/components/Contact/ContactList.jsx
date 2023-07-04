import useGroupedContacts from "@/hooks/useGroupedContacts";
import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Text, VStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import BackToTopButton from "../BackToTopButton";

const ContactList = ({ contacts }) => {
  const groupedContacts = useGroupedContacts(contacts);

  return (
    <Flex direction="column" align="center" width="100%">
      {Object.keys(groupedContacts).map((letter) => (
        <Box
          key={letter}
          width="100%"
          p={2}
          borderRadius="md"
          fontSize={{ base: "xs", md: "sm", lg: "xl" }}
        >
          {letter}

          <VStack gap={0} width="100%">
            <Divider borderColor="gray.400" margin={2} />

            {groupedContacts[letter].map((contact) => (
              <Box
                className="individual individualBox"
                key={contact.id}
                _hover={{ bg: "white" }}
                p={3}
                width="100%"
                bg="gray.50"
              >
                <Link key={contact.id} href={`/contact/${contact.id}`}>
                  <Text fontSize="md" fontWeight="700">
                    {contact.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    <PhoneIcon color="gray.600" mr={2} fontSize="xs" />
                    {contact.phone}
                  </Text>
                </Link>
              </Box>
            ))}
          </VStack>
        </Box>
      ))}
    </Flex>
  );
};

export default ContactList;
