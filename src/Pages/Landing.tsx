import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Image,
  Paper,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import React, { useState } from "react";
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
import { BlackText } from "../Styles/Text";
import { BurgerStyled, GroupStyled } from "../Styles/Header";

export const Landing = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opened, setOpened] = useState(false);

  return (
    <Container fluid px={0} className="landing_container">
      <FlexContainer>
        <Image src={logo} height="75px" width="75px" />
        <Group
          sx={(theme) => ({
            color: "pink",
            backgroundColor: opened ? "white" : "",
          })}
        >
          <BlackText>Home</BlackText>
          <BlackText>About</BlackText>
          <BlackText>Portfolio</BlackText>
          <BlackText>Contact</BlackText>
          <ActionIcon
            variant="transparent"
            onClick={() => toggleColorScheme()}
            title="ColorScheme Toggle"
            style={{ color: "white" }}
          >
            {dark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
          </ActionIcon>
        </Group>
        <BurgerStyled
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          color="white"
        />
      </FlexContainer>
      {/* <FlexContainer>
        <Container fluid>
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
        </Container>
        <Image src={picture} />
      </FlexContainer> */}
    </Container>
  );
};
