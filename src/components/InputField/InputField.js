import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      display: "flex",
      width: "100%",
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
}));

export default function InputField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Add A Task" variant="outlined" />
    </form>
  );
}
