import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { init as initFloatingButton } from "../services/floating-menu.service";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      padding: 0,
      margin: 0,
    },
  },
  mainWrapper: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    pointerEvents: "none",
  },
  menuItem: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f7f7f7",
    color: "black",
    listStyleType: "none",
    transform: "scale(0.95)",
    transition: ".5s",
    borderRadius: "50%",
  },
  menuItemList: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  fabButton: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "#6B26BB",
    color: "white",
    zIndex: 1000,
    boxShadow: "0px 2px 17px -1px rgba(0,0,0,0.3)",
  },
  floatingButtonWrapper: {
    pointerEvents: "auto",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "40%",
    left: "30px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    "&.fab-active li:hover": {
      backgroundColor: "#f8e487",
    },
    "&.fab-active.left li:nth-child(1)": {
      top: "0%",
      left: "300%",
      transitionDelay: "0s",
    },
    "&.fab-active.left li:nth-child(2)": {
      top: "0%",
      left: "200%",
      transitionDelay: "0.2s",
    },
    "&.fab-active.left li:nth-child(3)": {
      top: "0%",
      left: "100%",
      transitionDelay: "0.4s",
    },
    "&.fab-active.right li:nth-child(1)": {
      top: "0%",
      left: "-300%",
      transitionDelay: "0s",
    },
    "&.fab-active.right li:nth-child(2)": {
      top: "0%",
      left: "-200%",
      transitionDelay: "0.2s",
    },
    "&.fab-active.right li:nth-child(3)": {
      top: "0%",
      left: "-100%",
      transitionDelay: "0.4s",
    },
  },
}));

export default function FloatingMenu() {
  const classes = useStyles();

  useEffect(() => {
    initFloatingButton(
      document.getElementById("pk-floating-menu"),
      document.getElementById("pk-floating-menu-wrapper")
    );
  });

  return (
    <React.Fragment>
      <div id="pk-floating-menu-wrapper" className={classes.mainWrapper}>
        <div id="pk-floating-menu" className={classes.floatingButtonWrapper}>
          <div className={classes.fabButton}>
            <MenuIcon />
          </div>
          <ul className={classes.menuItemList}>
            <li className={classes.menuItem}>
              <MenuIcon />
            </li>
            <li className={classes.menuItem}>
              <MenuIcon />
            </li>
            <li className={classes.menuItem}>
              <MenuIcon />
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
