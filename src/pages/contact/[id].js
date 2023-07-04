import ContactDetails from "@/components/Contact/ContactDetails";
import { normalizePhone } from "@/utils/normalizePhone";
import { Button, useBreakpointValue, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function ContactPage({ contact }) {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(true);
  const isBaseDevice = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    setIsHomePage(router.pathname === "/");
  }, [router.pathname]);

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Flex
        direction="row"
        align="center"
        justify="center"
        height="70px"
        bg="blue.300"
      >
        {!isHomePage && (
          <Button
            variant="primary"
            bg="none"
            color="blue.700"
            fontSize="3xl"
            _hover={{ bg: "none", color: "blue.50" }}
            ml={5}
            onClick={handleBack}
          >
            {isBaseDevice ? <ArrowBackIcon mr={2} fontSize="3xl" /> : <>Back</>}
          </Button>
        )}
        <Text
          align="center"
          flex={1}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="700"
          color="gray.700"
        >{`${contact.name}'s Profile`}</Text>
      </Flex>

      <ContactDetails contact={contact} />
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((contact) => {
    return {
      params: { id: contact.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const contact = await response.json();

  const normalizedContacts = {
    ...contact,
    phone: normalizePhone(contact.phone),
    email: contact.email.toLowerCase(),
  };

  return {
    props: {
      contact: normalizedContacts,
    },
  };
};
