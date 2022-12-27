import React, { useState } from "react";
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
  const [taskItem, setTaskItem] = useState({});

  const classes = useStyles();
  const handleTaskItem = (e) => {
    console.log(taskItem);
    let task = { name: taskItem, isChecked: true, isDeleted: true };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(event) => {
          setTaskItem(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleTaskItem();
          }
        }}
        name="text"
        id="outlined-basic"
        label="Add A Task"
        variant="outlined"
      />
    </form>
  );
}
