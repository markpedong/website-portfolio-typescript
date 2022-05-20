import { createStyles } from "@mantine/core";

export const ProjectStyles = createStyles((theme) => ({
  Container: {
    background:
      theme.colorScheme === "dark"
        ? "linear-gradient(90deg, rgb(15,18,28) 50%, rgba(0, 0, 0, 1) 50%)"
        : "linear-gradient(90deg, #dee2e6 50%, rgba(0, 0, 0, 1) 50%)",
  },

  BGImage: {
    blockSize: "22rem",
    inlineSize: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },

  Center: {
    width: "auto",
    height: "100%",
  },

  Header: {
    color: "white",
    border: "4px solid white",
  },

  TechStack: {
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },

  TechImage: {
    width: "1.5rem",
    height: "1.5rem",
  },

  Links: {
    textTransform: "uppercase",
    background: "white",
    color: "black",
    padding: "0.1rem 0.8rem",
    borderRadius: "0.2rem",
    fontWeight: "bold",
    transition: "all 0.2s ease",

    "&:hover": {
      background: "black",
      color: "white",
      padding: "0.1rem 1.2rem",
    },
  },

  ManyMore: {
    background: "black",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "1.2rem",
    paddingBlock: "1.2rem",
  },
}));
