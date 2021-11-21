import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const location = useLocation();
  const history = useHistory();

  const [loginData, setLoginData] = useState({});
  const { user, error, isLoading, loginUser, handleGoogleSignin } = useAuth();
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData?.email, loginData?.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignInBtn = () => {
    handleGoogleSignin(location,history);
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          {!isLoading && (
            <>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your email"
                name="email"
                onChange={handleOnchange}
                variant="standard"
              />{" "}
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-password-input"
                label="Your Password"
                name="password"
                onChange={handleOnchange}
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <br /> <br />
              <Button
                variant="contained"
                type="submit"
                sx={{ width: "75%", m: 1, backgroundColor: "#5CE7ED" }}
              >
                Login
              </Button>{" "}
              <br />
              <NavLink style={{ textDecoration: "none" }} to="/register">
                New user? Please <Button variant="text">Register</Button>
              </NavLink>
            </form>
            <p>------------------------------</p>
            <Button
                onClick={handleGoogleSignInBtn}
                variant="contained"
                type="submit"
                sx={{ width: "75%", m: 1, backgroundColor: "#5CE7ED" }}
              >
                Google Sign in
              </Button>
            </>
          )}
          {isLoading && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          )}
          {user?.email && (
            <Alert severity="success">User logged in successfully !</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} alt=""></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
