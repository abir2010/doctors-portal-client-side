import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import ppl_1 from "../../../images/people-1.png";
import ppl_2 from "../../../images/people-2.png";
import ppl_3 from "../../../images/people-3.png";

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 24,
};
const verticalLeft = {
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  textAlign: "left",
};

const Testimonials = () => {
  return (
    <Container sx={{ flexGrow: 1, my: 8 }}>
      <Container style={verticalLeft}>
        <Box>
          <Typography
            variant="xs"
            style={{ color: "#5CE7ED", fontWeight: 900 }}
          >
            TESTIMONIALS
          </Typography>
          <Typography style={{ fontSize: 40, fontWeight: 900 }}>
            What's Our Patients Says
          </Typography>
        </Box>
      </Container>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Container
            style={{
              color: "gray",
              width: "90%",
            }}
          >
            <Typography variant="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto alias temporibus soluta, inventore dignissimos eius
              explicabo harum exercitationem eligendi laboriosam dolores quia.
              Quam soluta excepturi ratione? Fuga veniam sed delectus.
            </Typography>
          </Container>
          <br />
          <br />
          <Container style={{ ...verticalCenter }}>
            <img src={ppl_1} alt="" />
            <Box style={{ mx: 4 }}>
              <Typography
                variant="xs"
                style={{ color: "#5CE7ED", fontWeight: 900 }}
              >
                Winson Harry
              </Typography>{" "}
              <br />
              <Typography
                variant="xs"
                style={{
                  color: "gray",
                }}
              >
                California
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Container
            style={{
              color: "gray",
              width: "90%",
            }}
          >
            <Typography variant="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto alias temporibus soluta, inventore dignissimos eius
              explicabo harum exercitationem eligendi laboriosam dolores quia.
              Quam soluta excepturi ratione? Fuga veniam sed delectus.
            </Typography>
          </Container>
          <br />
          <br />
          <Container style={{ ...verticalCenter }}>
            <img src={ppl_2} alt="" />
            <Box style={{ mx: 4 }}>
              <Typography
                variant="xs"
                style={{ color: "#5CE7ED", fontWeight: 900 }}
              >
                Winson Harry
              </Typography>{" "}
              <br />
              <Typography
                variant="xs"
                style={{
                  color: "gray",
                }}
              >
                California
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Container
            style={{
              color: "gray",
              width: "90%",
            }}
          >
            <Typography variant="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto alias temporibus soluta, inventore dignissimos eius
              explicabo harum exercitationem eligendi laboriosam dolores quia.
              Quam soluta excepturi ratione? Fuga veniam sed delectus.
            </Typography>
          </Container>
          <br />
          <br />
          <Container style={{ ...verticalCenter }}>
            <img src={ppl_3} alt="" />
            <Box style={{ mx: 4 }}>
              <Typography
                variant="xs"
                style={{ color: "#5CE7ED", fontWeight: 900 }}
              >
                Winson Harry
              </Typography>{" "}
              <br />
              <Typography
                variant="xs"
                style={{
                  color: "gray",
                }}
              >
                California
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
