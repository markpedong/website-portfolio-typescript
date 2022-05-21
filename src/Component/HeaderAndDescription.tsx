import { Box, Image, Text, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { FlexContainer } from "../Styles/StyledComponents/Container";
import { HeaderBorder } from "../Styles/StyledComponents/Text";
import { AboutStyles } from "../Styles/Theme/About";
import divider from "../Images/divider.svg";
import divider_dark from "../Images/divider_dark.svg";

type Props = {
  title: string;
  description: string;
  style?: React.CSSProperties;
};

export const HeaderAndDescription = ({ title, description, style }: Props) => {
  const { classes } = AboutStyles();
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <FlexContainer className={classes.About} size="sm">
        <HeaderBorder
          className={classes.Title}
          padding={`${true}`}
          style={style}
        >
          {title}
        </HeaderBorder>
        <Text>{description}</Text>
      </FlexContainer>
      <Image
        className={classes.Divider}
        src={colorScheme === "dark" ? divider_dark : divider}
        width="15rem"
      />
    </>
  );
};
