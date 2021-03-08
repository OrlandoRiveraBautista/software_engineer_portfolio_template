import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Section from "./Section";

import FullStack from "../graphics/FullStackSvg";
import FastLearnerSvg from "../graphics/FastLearnerSvg";
import TeamPlayerSvg from "../graphics/TeamPlayerSvg";
import PositiveChange from "../graphics/PositiveChangeSvg";

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
  },
  containerStyles: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(50),
      height: theme.spacing(65),
      padding: theme.spacing(1),
    },
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  imgStyles: {
    fontSize: 128,
    marginBottom: theme.spacing(3),
  },
  skillsHeading: {
    marginBottom: theme.spacing(3),
  },
}));

function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="skills">
      <Container maxWidth="md">
        <Section sectionName="Skills" />
        <div className={classes.containerStyles}>
          {/* Skill section 1 */}
          <Paper elevation={3}>
            <FullStack className={classes.imgStyles} />
            <Typography variant="h5" className={classes.skillsHeading}>
              Full-Stack Developer
            </Typography>
            <Typography variant="body1">
              If you are searching for an individual with knowledge and
              experience with full-stack development, with the ability to wear
              many hats and work across all parts of your product's tech stack,
              then I am your guy. With experience using leading technologies and
              frameworks like ReactJS, React Native, NodeJs, MongoDB, AWS, and
              many more, I am highly confident I can bring great value to your
              team!
            </Typography>
          </Paper>

          {/* Skill section 2 */}
          <Paper elevation={3}>
            <FastLearnerSvg className={classes.imgStyles} />
            <Typography variant="h5" className={classes.skillsHeading}>
              Fast Learner
            </Typography>
            <Typography variant="body1">
              In an industry that is forever evolving, many find it daunting
              having to keep their knowledge fresh at the same time as gaining
              new ones, having to stay relevant as well as looking into the
              future. I, on the other hand, find it beautiful. I see a vast
              runway ahead in which we can all create positive impacts in
              people's lives. By rapidly learning, and testing, we can reach our
              goals faster and more effectively, creating greater value than
              once expected; surprising you, and delighting you.
            </Typography>
          </Paper>

          {/* Skill section 3 */}
          <Paper elevation={3}>
            <TeamPlayerSvg className={classes.imgStyles} />
            <Typography variant="h5" className={classes.skillsHeading}>
              Team Player
            </Typography>
            <Typography variant="body1">
              Fortunate to have worked in numerous teams of software developers
              on businesses and applications, I have seen the power of teamwork
              unfold around me. I have never achieved more and learned more than
              when working in a team. I believe that no one person holds all
              traits to be able to offer great value to any organization, but in
              the efforts of a group, we excel beyond expectations.
            </Typography>
          </Paper>

          {/* Skill section 4 */}
          <Paper elevation={3}>
            <PositiveChange className={classes.imgStyles} />
            <Typography variant="h5" className={classes.skillsHeading}>
              Driven by Positive Change
            </Typography>
            <Typography variant="body1">
              There is no greater feeling than watching your hard work and
              dedication pay off as a smile on someone's face. I am driven by
              positive social impacts, those that, in the future, with
              hindsight, have brought the world life-changing value.
            </Typography>
          </Paper>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
