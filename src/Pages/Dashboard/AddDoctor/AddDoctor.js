import React, { useState } from "react";
import { TextField, Input, Button } from "@mui/material";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("https://safe-caverns-59595.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("doctor added successfully");
          alert("doctor added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    e.target.reset();
  };

  return (
    <div>
      <h2>Add a doctor</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={(e) => setName(e.target.value)}
          required
        />{" "}
        <br />
        <br />
        <TextField
          sx={{ width: "50%" }}
          id="standard-basic"
          label="Email"
          type="email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        <br />
        <br />
        <Input
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />{" "}
        <br />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddDoctor;
