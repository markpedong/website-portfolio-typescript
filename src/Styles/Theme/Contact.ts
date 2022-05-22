import { createStyles } from "@mantine/core";

export const ContactStyles = createStyles((theme) => ({
  Container: {
    background:
      theme.colorScheme === "dark"
        ? "radial-gradient(circle, rgba(15,18,28,1) 25%, rgba(6,6,6,1) 50%)"
        : "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(196,196,196,1) 100%)",
  },

  MainContainer: {
    paddingBlockStart: "5rem",
  },

  Input: {
    color: theme.colorScheme === "dark" ? "white" : "black",
    border: "none",
    borderLeft: `4px solid ${theme.colorScheme === "dark" ? "white" : "black"}`,
    borderBottom: `4px solid ${
      theme.colorScheme === "dark" ? "white" : "black"
    }`,
    marginBlockStart: "3rem",
    paddingBlock: "0.4rem",
    paddingInline: "0.9rem",
    width: "100%",
    backgroundColor: "transparent",
    fontWeight: 700,
    fontFamily: "Inter",
    fontSize: "1rem",
    letterSpacing: "0.1rem",

    "&:focus": {
      outline: "none",
    },

    "::placeholder": {
      fontFamily: "Montserrat, sans-serif",
      letterSpacing: "0.15rem",
      cursor: "auto",
      color:
        theme.colorScheme === "dark"
          ? "rgba(255,255,255,0.5)"
          : "rgba(0,0,0,0.5)",
      fontSize: "0.8rem",
      textAlign: "start",
      fontWeight: 800,
    },
  },

  Submit: {
    marginBlock: "5rem",
    backgroundColor: "transparent",
    borderInline: `3px solid ${
      theme.colorScheme === "dark" ? "white" : "black"
    }`,
    borderRadius: "0px",
    padding: "1rem 3rem",
    fontSize: "1rem",
    fontWeight: 800,
    height: "100%",
    textTransform: "uppercase",
    letterSpacing: "5px",
    transition: "all 0.4s ease",
    color: theme.colorScheme === "dark" ? "white" : "black",

    "&:hover": {
      padding: "1rem",
      backgroundColor: theme.colorScheme === "dark" ? "white" : "black",
      color: theme.colorScheme === "dark" ? "black" : "white",
    },
  },
}));
