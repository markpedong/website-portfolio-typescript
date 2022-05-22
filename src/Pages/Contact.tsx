import { Button, Center, Container } from "@mantine/core";
import React from "react";
import { HeaderAndDescription } from "../Component/HeaderAndDescription";
import { ContactDescription } from "../Config/Text";
import { FlexContainer } from "../Styles/StyledComponents/Container";
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
          <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <input
              type="text"
              placeholder="ENTER YOUR NAME*"
              className={classes.Input}
              name="name"
            />
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL*"
              className={classes.Input}
              name="email"
            />
            <input
              type="text"
              placeholder="PHONE NUMBER"
              className={classes.Input}
              name="number"
            />
            <textarea
              className={classes.Input}
              style={{ height: "10rem" }}
              placeholder="MESSAGE"
              name="message"
            ></textarea>
            <Center>
              <Button className={classes.Submit} type="submit">
                Submit
              </Button>
            </Center>
          </form>
        </Container>
      </Container>
    </Container>
  );
};
