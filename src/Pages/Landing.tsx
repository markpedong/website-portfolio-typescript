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
import { Link } from "react-scroll";
import { NavLinks, SocialLinks } from "../Config/Variable";
import logo from "../Images/logo.svg";
import logodark from "../Images/logo_dark.svg";
import picture from "../Images/mypicture.png";
import picture992 from "../Images/mypicture@992.png";
import { FlexContainer } from "../Styles/StyledComponents/Container";
import { BlackText, WhiteText } from "../Styles/StyledComponents/Text";
import { NavStyles } from "../Styles/Theme/Landing";
import { motion } from "framer-motion";
import { SocialMediaLinks } from "../Component/SocialMediaLinks";

export const Landing = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = NavStyles();

  return (
    <Container fluid px="0" className={classes.LandingContainer} id="home">
      <Container size="md" px="0">
        <Container fluid className={classes.Navbar}>
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

          <Group className={classes.Links}>
            {NavLinks?.map((link, index) => (
              <Link key={index} to={link} smooth={true} duration={500}>
                <WhiteText>{link}</WhiteText>
              </Link>
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
            className={classes.Burger}
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
                className={classes.Dropdown}
                style={styles}
                px="0"
              >
                {NavLinks?.map((link, index) => (
                  <Link key={index} to={link} smooth={true} duration={500}>
                    <BlackText key={index}>{link}</BlackText>
                  </Link>
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
      <FlexContainer px="0" size="md" className={classes.LandingContent}>
        <Paper className={classes.LandingTitle}>
          <Text style={{ fontSize: "1.5rem" }}>Hi, I am</Text>
          <Text className={classes.Name}>Mark Jesson Pedong</Text>
          <Text weight="500">Aspring Programmer</Text>
          <SocialMediaLinks />
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
      </FlexContainer>
    </Container>
  );
};
