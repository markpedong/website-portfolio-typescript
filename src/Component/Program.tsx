import { Grid, Image, Text } from "@mantine/core";
import React from "react";
import { FlexContainer } from "../Styles/StyledComponents/Container";
import { AboutStyles } from "../Styles/Theme/About";

type ProgramArr = Program[];

type Program = {
  title: string;
  logo: string;
};

type Props = {
  Programs: ProgramArr;
  title: string;
};

export const ProgramComp = ({ Programs, title }: Props) => {
  const { classes } = AboutStyles();
  return (
    <>
      <Text weight="bolder" transform="uppercase" size="xl">
        {title}
      </Text>
      <Grid style={{ width: "100%" }}>
        {Programs.map((program: Program) => (
          <Grid.Col span={6} xs={4} sm={3} key={program.title}>
            <FlexContainer
              className={classes.Program}
              style={{
                gap: "1rem",
              }}
            >
              <Image src={program.logo} width="2.5rem" />
              <Text transform="uppercase">{program.title}</Text>
            </FlexContainer>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};
