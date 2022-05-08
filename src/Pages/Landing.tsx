import {
  ActionIcon,
  Container,
  Group,
  Image,
  Paper,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from "../Images/logo.svg";
import picture from "../Images/mypicture.png";
import { FlexContainer } from "../Styles/Container";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

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
      <FlexContainer>
        <Image src={picture} />
        <Paper>
          <Text>Hi my name is,</Text>
          <Text>Mark Jesson Pedong</Text>
          <Text>Aspring Programmer</Text>
          <Container>
            <ActionIcon>
              <AiFillGithub />
            </ActionIcon>
            <ActionIcon>
              <AiFillLinkedin />
            </ActionIcon>
            <ActionIcon>
              <AiFillTwitterCircle />
            </ActionIcon>
            <ActionIcon>
              <AiFillInstagram />
            </ActionIcon>
          </Container>
        </Paper>
      </FlexContainer>
    </Container>
  );
};
