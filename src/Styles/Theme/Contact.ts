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
    borderLeft: "4px solid black",
    borderBottom: "4px solid black",
    marginBlockStart: "3rem",
    paddingLeft: "1rem",
    textTransform: "uppercase",
  },

  Submit: {
    marginBlock: "5rem",
    backgroundColor: "transparent",
    color: "black",
    borderInline: "3px solid black",
    borderRadius: "0px",
    padding: "1rem 3rem",
    fontSize: "1rem",
    fontWeight: 800,
    height: "100%",
    textTransform: "uppercase",
    letterSpacing: "5px",
    transition: "all 0.4s ease",

    "&:hover": {
      padding: "1rem",
      backgroundColor: "black",
      color: "white",
    },
  },
}));
