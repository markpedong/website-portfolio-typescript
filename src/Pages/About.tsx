import {
  Container,
  Grid,
  Image,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { HeaderBorder } from "../Styles/StyledComponents/Text";
import { AboutStyles } from "../Styles/Theme/About";
import divider from "../Images/divider.svg";
import divider_dark from "../Images/divider_dark.svg";
import {
  FlexContainer,
  GridContainer,
  SkillContainer,
} from "../Styles/StyledComponents/Container";
import { ProgramsUsing, Skills } from "../Config/Variable";

export const About = () => {
  const { classes } = AboutStyles();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container fluid className={classes.MainBG}>
      <Container className={classes.Container} size="md">
        <FlexContainer className={classes.About} size="sm">
          <HeaderBorder className={classes.Title} padding>
            about me
          </HeaderBorder>
          <Text>
            A 21-year old Self-taught / Aspiring Programmer living in Cavite,
            Philippines. I'm continuously learning different Programming
            Softwares in order to attain my goals.
          </Text>
          <Image
            src={colorScheme === "dark" ? divider_dark : divider}
            width="15rem"
          />
        </FlexContainer>
        <GridContainer>
          {Skills.map((skill) => (
            <SkillContainer
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
          <HeaderBorder className={classes.Title} padding>
            skills
          </HeaderBorder>
          <Text weight="bolder" transform="uppercase" size="xl">
            using now:
          </Text>
          <Grid justify="start" align="center" gutter="xl">
            {ProgramsUsing.map((program) => (
              <Grid.Col
                span={3}
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Image src={program.logo} width="2.5rem" height="2.5rem" />
                <Text transform="uppercase">{program.title}</Text>
              </Grid.Col>
            ))}
          </Grid>
          <Image
            src={colorScheme === "dark" ? divider_dark : divider}
            width="15rem"
          />
        </FlexContainer>
      </Container>
    </Container>
  );
};
