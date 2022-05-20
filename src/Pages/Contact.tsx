import { Button, Center, Container, Input } from "@mantine/core";
import React from "react";
import { HeaderAndDescription } from "../Component/HeaderAndDescription";
import { ContactDescription } from "../Config/Text";
import { ContactStyles } from "../Styles/Theme/Contact";

export const Contact = () => {
  const { classes } = ContactStyles();
  return (
    <Container className={classes.Container} fluid id="contact">
      <Container className={classes.MainContainer} size="md">
        <HeaderAndDescription
          title="contact"
          description={ContactDescription}
        />
        <Container size="xs">
          <Input
            className={classes.Input}
            variant="unstyled"
            size="md"
            placeholder="name"
          />
          <Input
            className={classes.Input}
            variant="unstyled"
            size="md"
            placeholder="name"
          />
          <Input
            className={classes.Input}
            variant="unstyled"
            size="md"
            placeholder="name"
          />
          <Input
            className={classes.Input}
            variant="unstyled"
            size="md"
            placeholder="name"
          />
          <Center>
            <Button className={classes.Submit}>Submit</Button>
          </Center>
        </Container>
      </Container>
    </Container>
  );
};
