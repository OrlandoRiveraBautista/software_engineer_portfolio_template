import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(3),
  },
}));

function Section({ sectionName }) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography className={classes.heading} variant="h4" component="body">
        {sectionName}
      </Typography>
      <Divider className={classes.heading} variant="middle" />
    </Container>
  );
}

export default Section;
