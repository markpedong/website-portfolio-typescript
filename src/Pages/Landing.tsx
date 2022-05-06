import { Container, Group, Image, Paper, Text } from "@mantine/core";
import React from "react";

const logo = require("../Images/logo.svg");

export const Landing = () => {
  return (
    <Container
      fluid
      px={0}
      style={{
        height: "100vh",
        background: "linear-gradient(100 deg, blue 48%, rgba(0, 0, 0, 1) 48%)",
      }}
    >
      <Container>
        <Paper>
          <Text>
            <Image src={logo} />
            <Group>
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Portfolio</Text>
              <Text>Contact</Text>
            </Group>
          </Text>
        </Paper>
      </Container>
    </Container>
  );
};
