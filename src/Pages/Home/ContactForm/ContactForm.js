import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import appointmentBG from "../../../images/appointment-bg.png";

const appointmentBanner = {
  background: `url(${appointmentBG})`,
  backgroundColor: "rgba(45,58,74,0.8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 150,
};

const ContactForm = () => {
  return (
    <div>
      <Box style={appointmentBanner} sx={{ flexGrow: 1, py: 8 }}>
        <Box style={{ margin: "10px 0" }}>
          <Typography
            variant="xs"
            style={{ color: "#5CE7ED", fontWeight: 900 }}
          >
            CONTACT US
          </Typography>
          <Typography style={{ fontSize: 40, fontWeight: 900, color: "white" }}>
            Always Connect with us
          </Typography>
        </Box>
        <form action="">
          <TextField
            style={{ backgroundColor: "white", width: "50%" }}
            id="outlined-textarea"
            placeholder="Email Address*"
            multiline
          />{" "}
          <br />
          <br />
          <TextField
            style={{ backgroundColor: "white", width: "50%" }}
            id="outlined-textarea"
            placeholder="Subject*"
            multiline
          />{" "}
          <br />
          <br />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Your Message*"
            style={{ backgroundColor: "white", width: "50%" }}
          />{" "}
          <br />
          <br />
          <br />
          <br />
          <Button style={{ backgroundColor: "#5CE7ED",color:'black' }} variant="contained">Submit</Button>
        </form>
      </Box>
    </div>
  );
};

export default ContactForm;
