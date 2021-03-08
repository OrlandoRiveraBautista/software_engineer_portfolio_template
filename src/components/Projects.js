import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Section from "./Section";
import Links from "./Links";

import EbenezerMockup from "../graphics/MashupsEbenezerMockup.png";
import DotsonMockup from "../graphics/MashupsDotsonEdPlumbing.png";
import RateABusinessMockup from "../graphics/MashupsRate-A-Business.png";

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
  button: {
    margin: theme.spacing(2),
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
  projectsImg: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  projectsHeading: {
    display: "inline-block",
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  projectsDesc: {
    marginBottom: theme.spacing(2),
  },
  projectsCard: {
    textAlign: "left",
  },
  projectsImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="projects">
      <Container maxWidth="md">
        <Section sectionName="Projects" />

        {/* First Project */}
        {/* Image */}
        <Container className={classes.containerStyles}>
          <Container className={classes.projectsImageContainer}>
            <img
              alt="ebenezermockup"
              className={classes.projectsImg}
              src={EbenezerMockup}
            ></img>
          </Container>
          {/* Info Heading */}
          <Paper elevation={3} className={classes.projectsCard}>
            <Container>
              <Typography className={classes.projectsHeading} variant="h5">
                Ebenezer Church
              </Typography>
              <Links
                gitHub={
                  "https://github.com/OrlandoRiveraBautista/ebenezer-front"
                }
                siteUrl={"https://iglesiaebenezer.netlify.app/"}
              />
            </Container>

            {/* Description of project */}
            <Container>
              <Typography className={classes.projectsDesc} variant="body1">
                Developed a web application for a church during the pandemic so
                that the congregation could access the live streams easily.
              </Typography>
            </Container>

            {/* Features of project */}
            <Container style={{ marginBottom: "18px" }}>
              <Divider style={{ marginBottom: "18px" }} />
              <Typography variant="body1">
                - Immediate access to the current live stream video from
                youtube.
              </Typography>
              <Typography variant="body1">
                - PWA (Progressive Web App) obtimized so the user can download
                the website as an app on either their desktop or mobile device.
              </Typography>
              <Typography variant="body1">
                - Authentication with JWT and cookies to persist the sign in.
              </Typography>
              <Typography variant="body1">
                - Signed in user can make more users with permissions and add a
                new post.
              </Typography>
              <Typography variant="body1">
                - Users have the ability to donate to the church through Paypal
                API
              </Typography>
            </Container>

            {/* Stack */}
            <Container>
              <Divider style={{ marginBottom: "18px" }} />
              <Typography variant="body1">
                - Backend: NodeJs, Express, PaypalAPI, JWT, AWS, MongoDB,
                YoutubeAPI,
              </Typography>
              <Typography variant="body1">
                - Frontend: ReactJS, axios
              </Typography>
              <Typography variant="body1">
                - Hosting: Vercel (NextJs server for Backend), Netlify
                (Frontend).
              </Typography>
            </Container>
          </Paper>
        </Container>

        {/* Second Project */}
        {/* Image */}
        <Container className={classes.containerStyles}>
          <Container className={classes.projectsImageContainer}>
            <img
              alt="rateabusinessmockup"
              className={classes.projectsImg}
              src={RateABusinessMockup}
            ></img>
          </Container>
          {/* Info Heading */}
          <Paper elevation={3} className={classes.projectsCard}>
            <Container>
              <Typography className={classes.projectsHeading} variant="h5">
                Rate-A-Business
              </Typography>
              <Links
                gitHub={
                  "https://github.com/OrlandoRiveraBautista/rate-a-business"
                }
                siteUrl={"https://rate-a-business.netlify.app/"}
              />
            </Container>

            {/* Description of project */}
            <Container>
              <Typography className={classes.projectsDesc} variant="body1">
                A web application to rate nearby businesses by using the users
                location and data from google maps / google places.
              </Typography>
            </Container>

            {/* Features of project */}
            <Container style={{ marginBottom: "18px" }}>
              <Divider style={{ marginBottom: "18px" }} />
              <Typography variant="body1">
                - User can log in using their Google account.
              </Typography>
              <Typography variant="body1">
                - Data retrieved from Google Maps API / Google Places for
                accurate information about ratings, address, operations.
              </Typography>
              <Typography variant="body1">
                - Redux in use to prevent unnecessary access to the APIs.
              </Typography>
              <Typography variant="body1">
                - Users have the ability to rate a business through the Google
                Maps / Places API.
              </Typography>
            </Container>

            {/* Stack */}
            <Container>
              <Divider style={{ marginBottom: "18px" }} />
              <Typography variant="body1">
                - Backend: Firebase Authentication, Firestore as Storage.
              </Typography>
              <Typography variant="body1">
                - Frontend: ReactJS, Redux, Google Maps API.
              </Typography>
              <Typography variant="body1">- Hosting: Netlify</Typography>
            </Container>
          </Paper>
        </Container>

        {/* Third Project */}
        {/* Image */}
        <Container className={classes.containerStyles}>
          <Container className={classes.projectsImageContainer}>
            <img
              alt="dotsonmockup"
              className={classes.projectsImg}
              src={DotsonMockup}
            ></img>
          </Container>
          {/* Info Heading */}
          <Paper elevation={3} className={classes.projectsCard}>
            <Container>
              <Typography className={classes.projectsHeading} variant="h5">
                Dotson Ed Plumbing
              </Typography>
              <Links
                gitHub={
                  "https://github.com/OrlandoRiveraBautista/dotsonedplumbing"
                }
                siteUrl={"https://dotsonplumbing.com/"}
              />
            </Container>

            {/* Description of project */}
            <Container>
              <Typography className={classes.projectsDesc} variant="body1">
                Developed a business website for a plumbing business with SEO
                optimization to have it rank higher within the Houston plumbers.
              </Typography>
            </Container>

            {/* Features of project */}
            <Container style={{ marginBottom: "18px" }}>
              <Divider style={{ marginBottom: "18px" }} />
              <Typography variant="body1">
                - SEO optimized for higher ranking when plumbers in Houston are
                being searched through Google.
              </Typography>
              <Typography variant="body1">
                - Custom UI designed with the business and customer in mind.
              </Typography>
            </Container>

            {/* Stack */}
            <Container>
              <Divider style={{ marginBottom: "18px" }} />
              <Typography variant="body1">
                - Frontend: HTML, CSS, JavaScript.
              </Typography>
              <Typography variant="body1">- Hosting: Netlify</Typography>
            </Container>
          </Paper>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
