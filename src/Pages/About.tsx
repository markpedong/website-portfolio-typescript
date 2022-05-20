import { Container, Image, Text, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { ProgramComp } from "../Component/Program";
import {
  Learning,
  OtherPrograms,
  ProgramsUsing,
  Skills,
} from "../Config/Variable";
import divider from "../Images/divider.svg";
import divider_dark from "../Images/divider_dark.svg";
import {
  FlexContainer,
  GridContainer,
  SkillContainer,
} from "../Styles/StyledComponents/Container";
import { HeaderBorder } from "../Styles/StyledComponents/Text";
import { AboutStyles } from "../Styles/Theme/About";

export const About = () => {
  const { classes } = AboutStyles();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container fluid className={classes.MainBG}>
      <Container className={classes.Container} size="md">
        <FlexContainer className={classes.About} size="sm">
          <HeaderBorder className={classes.Title} padding={`${true}`}>
            about me
          </HeaderBorder>
          <Text>
            A 21-year old Self-taught / Aspiring Programmer living in Cavite,
            Philippines. I'm continuously learning different Programming
            Softwares in order to attain my goals.
          </Text>
        </FlexContainer>
        <Image
          className={classes.Divider}
          src={colorScheme === "dark" ? divider_dark : divider}
          width="15rem"
        />
        <GridContainer>
          {Skills.map((skill) => (
            <SkillContainer
              key={skill.title}
              className={
                skill.title === "maintenance" ? classes.Maintenance : ""
              }
            >
              <Image
                className={classes.Image}
                src={colorScheme === "dark" ? skill.logo_dark : skill.logo}
              />
              <HeaderBorder>{skill.title}</HeaderBorder>
              <Text style={{ gridColumn: "1/3" }} pt="lg">
                {skill.description}
              </Text>
            </SkillContainer>
          ))}
        </GridContainer>
        <Image
          className={classes.Divider}
          src={colorScheme === "dark" ? divider_dark : divider}
          width="15rem"
        />
        <FlexContainer className={classes.About} size="sm">
          <HeaderBorder className={classes.Title} padding={`${true}`}>
            skills
          </HeaderBorder>
          <ProgramComp Programs={ProgramsUsing} title="using now:" />
          <ProgramComp Programs={Learning} title="learning:" />
          <ProgramComp Programs={OtherPrograms} title="other skills:" />
        </FlexContainer>
        <Image
          className={classes.Divider}
          src={colorScheme === "dark" ? divider_dark : divider}
          width="15rem"
        />
      </Container>
    </Container>
  );
};
