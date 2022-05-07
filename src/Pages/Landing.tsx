import {
  ActionIcon,
  Container,
  Group,
  Image,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import logo from "../Images/logo.svg";
import { FlexContainer } from "../Styles/Container";
import { MdLightMode, MdDarkMode } from "react-icons/md";
export const Landing = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Container fluid px={0} className="landing_container">
      <FlexContainer>
        <Image src={logo} height="75px" width="75px" />
        <Group>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Portfolio</Text>
          <Text>Contact</Text>
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
          </ActionIcon>
        </Group>
      </FlexContainer>
    </Container>
  );
};
