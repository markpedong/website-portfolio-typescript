import { Box, Button, Center, Container, Input } from "@mantine/core";
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
          style={{ paddingInline: "4rem" }}
          title="contact"
          description={ContactDescription}
        />
        <Container size="xs">
          <Input
            className={classes.Input}
            variant="unstyled"
            size="md"
            placeholder="ENTER YOUR NAME*"
          />
          <Input
            className={classes.Input}
            variant="unstyled"
            size="md"
            placeholder="ENTER YOUR EMAIL*"
          />
          <Input
            className={classes.Input}
            variant="unstyled"
            size="md"
            placeholder="PHONE NUMBER"
          />
          <Input
            className={classes.Input}
            variant="unstyled"
            placeholder="YOUR MESSAGE"
            sx={(theme) => ({
              blockSize: "10rem",
            })}
          />
          <Center>
            <Button className={classes.Submit}>Submit</Button>
          </Center>
        </Container>
      </Container>
    </Container>
  );
};
