import BackToTopButton from "@/components/BackToTopButton";
import ContactList from "@/components/Contact/ContactList";
import SearchBar from "@/components/SearchBar";
import { normalizePhone } from "@/utils/normalizePhone";
import { Flex, Heading } from "@chakra-ui/react";
import { useMemo, useState } from "react";

export default function Home({ contacts }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value.trim());
  };

  const filteredContacts = useMemo(() => {
    if (searchValue === "") {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [contacts, searchValue]);

  return (
    <>
      <Flex
        direction="column"
        p={4}
        align="center"
        justify="center"
        maxWidth="1000px"
        margin="0 auto"
      >
        <Heading
          as="h1"
          size={{ base: "md", md: "xl", lg: "xl" }}
          color="gray.700"
        >
          My Contacts
        </Heading>

        <SearchBar onSearch={handleSearch} />

        <ContactList contacts={filteredContacts} />

        <BackToTopButton variant="primary" />
      </Flex>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const normalizedContacts = data.map((contact) => ({
      ...contact,
      phone: normalizePhone(contact.phone),
      email: contact.email.toLowerCase(),
    }));

    return {
      props: {
        contacts: normalizedContacts,
      },
    };
  } catch (error) {
    console.log("fetchError", error);
    return {
      props: {
        contacts: [],
      },
    };
  }
};
