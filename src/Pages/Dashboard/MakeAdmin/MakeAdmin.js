import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const { token } = useAuth();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h2>make me an admin</h2>
      <form onSubmit={handleAdminSubmit} action="">
        <TextField
          style={{ width: "25%" }}
          id="standard-basic"
          label="email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />{" "}
        <br /> <br />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made admin successfully !!</Alert>}
    </div>
  );
};

export default MakeAdmin;
