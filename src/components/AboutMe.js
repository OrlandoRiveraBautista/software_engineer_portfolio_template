import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ContactLinks from "./ContactLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  photoLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    margin: theme.spacing(2),
  },
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="home">
      <Container maxWidth="md">
        <Avatar alt="Orlando Rivera-Bautista" className={classes.photoLarge} />
        <Typography
          variant="body2"
          style={{ display: "block", marginBottom: "9px" }}
        >
          Software Engineer
        </Typography>
        <Typography variant="h3" component="h3" gutterBottom>
          Orlando Rivera-Bautista
        </Typography>
        <Typography style={{ marginBlock: "9px" }} variant="body1" gutterBottom>
          A productive and result-driven individual with 4 years of experience
          in providing technical solutions to small businesses and starting
          organized software projects seeking an Entry-Level Software Engineer
          position to further his career, and knowledge, as well as being a part
          of a team that creates positive social impacts.
        </Typography>

        <ContactLinks
          gitHub="https://github.com/OrlandoRiveraBautista"
          email="orlandovaluta@hotmail.com"
        />
      </Container>
    </div>
  );
}

export default AboutMe;
