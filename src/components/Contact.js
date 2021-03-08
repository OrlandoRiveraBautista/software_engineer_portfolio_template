import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Section from "./Section";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop: "18px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: theme.spacing(6),
  },
  containerStyles: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      marginBottom: theme.spacing(6),
      width: theme.spacing(50),
      padding: theme.spacing(1),
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contact">
      <Container maxWidth="md">
        <Section sectionName="Contact" />
        <Container>
          <ContactLinks noResume />
          <ContactForm />
        </Container>
      </Container>
    </div>
  );
}
