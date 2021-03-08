import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import ComputerIcon from "@material-ui/icons/Computer";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "30%",
    padding: 0,
  },
}));

export default function Links({ gitHub, siteUrl }) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Link href={gitHub}>
        <GitHubIcon />
      </Link>
      <Link href={siteUrl}>
        <ComputerIcon />
      </Link>
    </Container>
  );
}
