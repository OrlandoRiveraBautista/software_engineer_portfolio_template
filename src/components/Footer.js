import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "10vh",
    backgroundColor: "#d5d3d2",
    color: "black",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <CopyrightIcon />
        <Typography variant="caption" component="caption"></Typography>
        2020 : Orlando Rivera-Bautista
      </Container>
    </div>
  );
}
