import { Container, Text } from "@mantine/core";
import React from "react";
import { PageFooterStyled } from "../Styles/Theme/PageFooter";
import { FaAngleDoubleUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { FlexContainer } from "../Styles/StyledComponents/Container";
import { Link } from "react-scroll";
import { SocialMediaLinks } from "../Component/SocialMediaLinks";

export const Footer = () => {
  const { classes } = PageFooterStyled();

  return (
    <Container fluid className={classes.Container}>
      <FlexContainer className={classes.MainContainer}>
        <Link to="home" smooth={true} duration={500}>
          <motion.div whileHover={{ scale: 1.5 }}>
            <FaAngleDoubleUp size="1.5rem" />
          </motion.div>
          <Text className={classes.BackTop}>back to top</Text>
        </Link>
        <SocialMediaLinks />
        <Text pt="xl">@2022 Mark Jesson Pedong All Rights Reserved.</Text>
      </FlexContainer>
    </Container>
  );
};
