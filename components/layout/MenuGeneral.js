import React, { useContext, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../firebase";

const drawerWidth = 355;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
    height: "80px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    marginTop: "80px",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MenuGeneral = ({ handleChangeTheme }) => {
  const { usuario, firebase } = useContext(FirebaseContext);

  const classes = useStyles();
  const router = useRouter();

  const handleAcademia = () => {
    {
      usuario
        ? usuario.userProfile.isInstructor
          ? router.push("/dashboardInstructores")
          : router.push("/dashboardAlumnos")
        : router.push("/academia");
    }
  };

  return (
    <>
      <Button
        className={classes.menuButton}
        size="small"
        color="inherit"
        onClick={() => router.push("/")}
      >
        Home
      </Button>
      <Button
        className={classes.menuButton}
        size="small"
        color="inherit"
        onClick={() => router.push("/recursos")}
      >
        Recursos
      </Button>
      <Button
        className={classes.menuButton}
        size="small"
        color="inherit"
        onClick={() => router.push("/canal")}
      >
        Canal
      </Button>
      <Button
        className={classes.menuButton}
        size="small"
        color="inherit"
        onClick={() => router.push("/membresia")}
      >
        Memebresia
      </Button>
      <Button
        className={classes.menuButton}
        size="small"
        color="inherit"
        onClick={handleAcademia}
      >
        Academia
      </Button>
    </>
  );
};

export default MenuGeneral;
