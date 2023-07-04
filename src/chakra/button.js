export const Button = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      height: "28px",
    },
  },
  variants: {
    primary: {
      color: "white",
      bg: "gray.600",
      borderRadius: "10px",
      _hover: {
        bg: "gray.700",
      },
    },
    secondary: {
      color: "white",
      bg: "blue.400",
      borderRadius: "10px",
      _hover: {
        bg: "blue.500",
      },
    },
  },
};
