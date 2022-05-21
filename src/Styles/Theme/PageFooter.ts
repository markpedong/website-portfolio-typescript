import { createStyles } from "@mantine/core";

export const PageFooterStyled = createStyles((theme) => ({
  Container: {
    paddingBlock: "3rem",
    paddingInline: "0",
    backgroundColor: theme.colorScheme === "dark" ? "#000" : "#1a1a1a",
    color: "white",
  },
  MainContainer: {
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  BackTop: {
    padding: "1rem 0 0.5rem 0",
    letterSpacing: "0.3rem",
    fontSize: "1.4rem",
    textTransform: "uppercase",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
  },
}));
