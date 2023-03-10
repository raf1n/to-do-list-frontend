import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import styles from "./styles.module.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const NavBar = () => {
  const classes = useStyles();
  return (
    <Grid className={styles.m}>
      <Box border={1}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              TODO List
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default NavBar;
