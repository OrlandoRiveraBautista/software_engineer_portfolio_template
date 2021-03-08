import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

export default function ContactLinks({ gitHub, email, resumeLink, noResume }) {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button} href={gitHub}>
        <GitHubIcon fontSize="large" />
      </Button>
      <Button className={classes.button} href={`mailto: ${email}`}>
        <EmailIcon fontSize="large" />
      </Button>
      {!noResume ? (
        <Button className={classes.button} variant="contained" color="primary">
          Resume
        </Button>
      ) : null}
    </div>
  );
}
