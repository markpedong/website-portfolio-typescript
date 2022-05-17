import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Image,
  MediaQuery,
  Paper,
  Text,
  Transition,
  useMantineColorScheme,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLinks, SocialLinks } from "../Config/Variable";
import logo from "../Images/logo.svg";
import logodark from "../Images/logo_dark.svg";
import picture from "../Images/mypicture.png";
import picture992 from "../Images/mypicture@992.png";
import { BlackText, WhiteText } from "../Styles/Text";
import { NavStyles } from "../Theme/Navbar";

export const Landing = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = NavStyles();

  return (
    <Container fluid px="0" className={classes.landingContainer}>
      <Container size="md" px="0">
        <Container fluid className={classes.navbar}>
          <MediaQuery
            smallerThan="md"
            styles={{
              display: "none",
            }}
          >
            <Image
              src={colorScheme === "dark" ? logodark : logo}
              height="75px"
              width="75px"
            />
          </MediaQuery>
          <MediaQuery
            largerThan="md"
            styles={{
              display: "none",
            }}
          >
            <Image src={logodark} height="75px" width="75px" />
          </MediaQuery>

          <Group className={classes.links}>
            {NavLinks?.map((link, index) => (
              <WhiteText key={index}>{link}</WhiteText>
            ))}
            <ActionIcon
              variant="transparent"
              onClick={() => toggleColorScheme()}
              title="ColorScheme Toggle"
              style={{ color: "white" }}
            >
              {dark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
            </ActionIcon>
          </Group>

          <Burger
            className={classes.burger}
            opened={opened}
            onClick={() => toggleOpened()}
            color="white"
          />

          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Container
                fluid
                className={classes.dropdown}
                style={styles}
                px="0"
              >
                {NavLinks?.map((link, index) => (
                  <BlackText key={index}>{link}</BlackText>
                ))}
                <ActionIcon
                  variant="transparent"
                  onClick={() => toggleColorScheme()}
                  title="ColorScheme Toggle"
                >
                  {dark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
                </ActionIcon>
              </Container>
            )}
          </Transition>
        </Container>
      </Container>
      <Container px="0" size="md" className={classes.landingContent}>
        <Paper className={classes.landingTitle}>
          <Text style={{ fontSize: "1.5rem" }}>Hi, I am</Text>
          <Text className={classes.name}>Mark Jesson Pedong</Text>
          <Text weight="500">Aspring Programmer</Text>
          <Group px="0" pt="1rem" direction="row">
            {SocialLinks?.map((link, index) => (
              <Text component="a" href={link.link} target="_blank">
                {link.icon}
              </Text>
            ))}
          </Group>
        </Paper>
        <MediaQuery
          smallerThan="md"
          styles={{
            display: "none",
          }}
        >
          <Image src={picture} height="40rem" />
        </MediaQuery>
        <MediaQuery
          largerThan="md"
          styles={{
            display: "none",
          }}
        >
          <Image src={picture992} height="30rem" />
        </MediaQuery>
      </Container>
    </Container>
  );
};
