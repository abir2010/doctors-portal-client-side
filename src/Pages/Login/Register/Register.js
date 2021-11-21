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
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { user, error, handleRegUser, isLoading } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("your pass didn't match!");
      return;
    }
    handleRegUser(
      loginData?.email,
      loginData?.password,
      loginData?.name,
      history
    );
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
                required
              />{" "}
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
                required
              />{" "}
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-password-input"
                label="Your Password"
                name="password"
                onBlur={handleOnBlur}
                type="password"
                autoComplete="current-password"
                variant="standard"
                required
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-password-input"
                label="Re-type Your Password"
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                autoComplete="current-password"
                variant="standard"
                required
              />
              <br /> <br />
              <Button
                variant="contained"
                type="submit"
                sx={{ width: "75%", m: 1, backgroundColor: "#5CE7ED" }}
              >
                Register
              </Button>{" "}
              <br />
              <NavLink style={{ textDecoration: "none" }} to="/login">
                Already Registered? Please <Button variant="text">Login</Button>
              </NavLink>
            </form>
          )}{" "}
          {isLoading && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          )}
          {user?.email && (
            <Alert severity="success">User created successfully !</Alert>
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

export default Register;
