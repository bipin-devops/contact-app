import {
  Divider,
  Grid,
  GridItem,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import ContactCard from "./ContactCard";

import BackToTopButton from "../BackToTopButton";
import CompanyCard from "./CompanyCard";

const ContactDetails = ({ contact }) => {
  const isBaseDevice = useBreakpointValue({ base: true, md: false, lg: false });

  return (
    <>
      <Flex direction="column" align="center" justify="center" m={2}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
          gap={{ md: 4, lg: 8 }}
          p={5}
          mt={2}
          width="100%"
        >
          <GridItem>
            <ContactCard contact={contact} />
          </GridItem>

          <GridItem mt={{ base: "30px", md: "0px", lg: "0px" }}>
            <CompanyCard company={contact.company} />
          </GridItem>
        </Grid>
        {isBaseDevice ? <BackToTopButton variant="secondary" /> : null}
      </Flex>
    </>
  );
};

export default ContactDetails;
