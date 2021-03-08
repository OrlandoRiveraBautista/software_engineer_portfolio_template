import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
});

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab href="#home" label="Home"></Tab>
        <Tab href="#skills" label="Skills"></Tab>
        <Tab href="#projects" label="Projects"></Tab>
        <Tab href="#contact" label="Contact"></Tab>
      </Tabs>
    </Paper>
  );
}

export default NavBar;
