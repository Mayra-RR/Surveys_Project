import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./Navbar.css";
import iconS from "../../Imgs/iconS.png";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <AppBar className={"navBar"}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu">
            <Link to="/Surveys_Project" >
              <img alt="icon" src={iconS} width="50%" />
            </Link>
          </IconButton>
          <div className="title">
            <Typography variant="h6">
              <Link to="/Surveys_Project" className="surveys">
                <label> MySurveys </label>
              </Link>{" "}
            </Typography>
          </div>
          <div>
            <Button color="inherit" onclick={Login} className="loginBtn">
              <Link to="/login" className="login">
                <label>Login </label>
              </Link>{" "}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
