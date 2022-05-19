import { createStyles } from "@mantine/core";

export const AboutStyles = createStyles((theme) => ({
  MainBG: {
    color: theme.colorScheme === "dark" ? "white" : "black",
    paddingInline: 0,
    background:
      theme.colorScheme === "dark"
        ? "radial-gradient(circle, rgba(15,18,28,1) 25%, rgba(6,6,6,1) 50%)"
        : "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(196,196,196,1) 100%)",
  },
  Container: {
    paddingBlock: "5rem",
  },

  Maintenance: {
    gridColumn: "1/3",

    [theme.fn.largerThan("md")]: {
      gridColumn: "1/3",
      marginBlockStart: "2rem",
    },
  },

  SkillsContainer: {
    [theme.fn.smallerThan("md")]: {
      width: "464px",
    },
  },

  About: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "3rem",
    paddingInline: 0,
    paddingBlockEnd: "8rem",
  },

  Image: {
    opacity: 0.25,
    width: "2.5rem",
    height: "2.5rem",
  },

  Divider: {
    display: "flex",
    justifyContent: "center",
    marginBlock: "8rem",
  },

  Title: {
    border:
      theme.colorScheme === "dark" ? "4px solid white" : "4px solid black",
  },
}));
