import React, { Fragment, useState } from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    // marginLeft: "2rem",
    // marginRight: "2rem",
    margin: "2rem",
    width: 200,
  },
  btn: {
    marginLeft: "42rem",
  },
}));

const InfoPage = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  // const [dob, newDob] = useState("");
  const [number, setNumber] = useState("");
  const [prompt, setPrompt] = useState(false);
  const nameData = sessionStorage.getItem(name);
  const numberData = sessionStorage.getItem(number);

  const handle = () => {
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("number", number);
  };
  // if (nameData === name) {
  //   // setPrompt(false);
  // } else {
  //   // setPrompt(true);
  //   <div>hello</div>;
  // }

  return (
    <Fragment>
      <form className={classes.container} noValidate>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Name"
          variant="outlined"
          onChange={(e) => {
            console.log(name);
            setName(e.target.value);
          }}
        >
          {name}
        </TextField>

        <TextField
          id="date"
          label="DOB"
          type="date"
          defaultValue="YYYY-MM-DD"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Mobile"
          variant="outlined"
          onChange={(e) => {
            console.log(number);
            setNumber(e.target.value);
          }}
        >
          {number}
        </TextField>
      </form>
      {/* {if()} */}
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={handle}
        component={Link}
        to="/aravind"
      >
        Submit
      </Button>
    </Fragment>
  );
};

export default InfoPage;
