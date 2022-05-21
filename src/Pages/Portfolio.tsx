import {
  BackgroundImage,
  Center,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import { ProjectArr } from "../Config/Variable";
import PortfolioHeader from "../Images/PortfolioHeader.jpg";
import { FlexContainer } from "../Styles/StyledComponents/Container";
import { HeaderBorder } from "../Styles/StyledComponents/Text";
import { ProjectStyles } from "../Styles/Theme/Project";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const { classes } = ProjectStyles();
  return (
    <>
      <Container fluid px={0} className={classes.Container} id="portfolio">
        <BackgroundImage src={PortfolioHeader} className={classes.BGImage}>
          <Center className={classes.Center}>
            <HeaderBorder
              padding={`${true}`}
              className={classes.Header}
              style={{
                padding: "0.7rem 3.5rem",
              }}
            >
              projects
            </HeaderBorder>
          </Center>
        </BackgroundImage>
        <Container fluid px="0">
          <SimpleGrid
            cols={3}
            spacing={0}
            breakpoints={[
              { maxWidth: 1200, cols: 2 },
              { maxWidth: 768, cols: 1 },
            ]}
          >
            {ProjectArr.map((project) => (
              <Container
                key={project.title}
                p="0"
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <BackgroundImage
                  className={classes.BGImage}
                  src={project.background}
                  style={{
                    color: "white",
                    padding: "0.5rem",
                  }}
                >
                  <motion.div
                    className={classes.Portfolio}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Text size="xs" style={{ fontStyle: "italic" }}>
                      {project.written}
                    </Text>
                    <Text
                      style={{
                        fontSize: "1.5rem",
                        letterSpacing: "5px",
                        wordBreak: "break-word",
                      }}
                      weight={800}
                      py="lg"
                    >
                      {project.title}
                    </Text>
                    <Text style={{ fontSize: "0.9rem" }} weight={600} pb="lg">
                      {project.description}
                    </Text>
                    <Text size="xs" weight={800} transform="capitalize">
                      tech stack used in this project:
                    </Text>
                    <FlexContainer className={classes.TechStack}>
                      {project.techStack.map((tech, index) => (
                        <Image
                          className={classes.TechImage}
                          src={tech}
                          key={index}
                        />
                      ))}
                    </FlexContainer>
                    <FlexContainer className={classes.TechStack}>
                      <Text
                        component="a"
                        target="_blank"
                        href={project.website}
                        className={classes.Links}
                      >
                        website
                      </Text>
                      <Text
                        component="a"
                        target="_blank"
                        href={project.github}
                        className={classes.Links}
                      >
                        github
                      </Text>
                    </FlexContainer>
                  </motion.div>
                </BackgroundImage>
              </Container>
            ))}
          </SimpleGrid>
        </Container>
      </Container>
      <Text className={classes.ManyMore}>and many more to come!</Text>
    </>
  );
};
