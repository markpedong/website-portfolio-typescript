import { Button, Container, Image, Text } from "@mantine/core";
import React from "react";
import avalanche from "../Images/avalanchelogo.svg";
import { FlexContainer } from "../Styles/StyledComponents/Container";
import { Footer } from "../Styles/Theme/Footer";

export const LandingFooter = () => {
  const { classes } = Footer();

  return (
    <Container fluid px="0" className={classes.FooterContainer}>
      <FlexContainer size="lg">
        <FlexContainer fluid px="0" direction="column" position="start">
          <Text className={classes.TitleBackground}>background</Text>
          <Text>
            I wanted to become a Programmer for a long time but didn’t get a
            chance to do it for specific reasons. I taught myself how to use
            different programming languages such as HTML, CSS, and JavaScript. I
            learned programming language from scratch by watching YouTube
            tutorials and applying what I’ve learned by solving problems and
            creating this website. In my free time, I'm trading cryptocurrency
            and investing in NFT's since I believe that it will be the future. I
            like to read science books and watch documentaries about the things
            that will add to my knowledge.
          </Text>
          <Button className={classes.ReadMore}>read more</Button>
        </FlexContainer>
        <Image
          src={avalanche}
          className={classes.Avalanche}
          height="15rem"
          width="15rem"
        />
      </FlexContainer>
    </Container>
  );
};
