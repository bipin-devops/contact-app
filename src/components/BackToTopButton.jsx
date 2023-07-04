import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const BackToTopButton = ({ variant }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton ? (
        <Box position="sticky" bottom={5}>
          <Button variant={variant} onClick={scrollToTop}>
            Back to Top
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export default BackToTopButton;
