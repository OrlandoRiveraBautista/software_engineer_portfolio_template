import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs, { init } from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [sent, setSent] = useState("null");

  const handleChange = (event) => {
    const set = eval(`set${event.target.name}`);
    set(event.target.value);
  };

  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      init("user_UErEcfeOzUl5hGUonMgL4");

      if (name && email && subject && message) {
        await setSent(false);

        const templateParams = {
          from_name: name,
          from_email: email,
          from_subject: subject,
          from_message: message,
        };

        await emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_template_id,
            templateParams
          )
          .then((results) => {
            setSent(true);
          })
          .catch((e) => console.log(e));
      }
    } catch {
      console.log("Something went wrong.");
    }
  };

  return (
    <Container>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="name"
          name="Name"
          id="standard-basic"
          label="Name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          type="email"
          name="Email"
          id="standard-basic"
          label="Email"
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="Subject"
          id="standard-full-width"
          fullWidth
          label="Subject"
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="Message"
          id="standard-full-width"
          fullWidth
          label="Message"
          onChange={handleChange}
        />
        <Button type="submit" variant="outlined" color="primary">
          {sent === true ? "Sent" : null}
          {sent === false ? "Sending" : null}
          {sent === "null" ? "Send" : null}
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
