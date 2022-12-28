import { FormControlLabel } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "none",
    height: "50px",
    display: "flex",
    color: theme.palette.text.secondary,
    alignItems: "center",
  },
}));
const TaskItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{
        marginTop: "10px",
        marginBottom: "10px",
        padding: "10px",
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        borderRadius: "3px",
      }}
    >
      <Grid style={{ alignItems: "center" }}>
        <Paper className={classes.paper}>
          <FormControlLabel
            checked={item?.isChecked}
            control={<Checkbox name="checkedA" />}
            label={item?.name}
          />
        </Paper>
      </Grid>
      <Grid>
        <Button style={{ marginRight: "5px" }} color="primary">
          EDIT
        </Button>
        <Button color="primary">DELETE</Button>
      </Grid>
    </Grid>
  );
};

export default TaskItem;
