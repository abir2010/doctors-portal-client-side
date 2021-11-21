import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import treatmentPic from "../../../images/treatment.png";
import { Button, Container, Typography } from "@mui/material";

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const DentalCare = () => {
  return (
    <Container sx={{ flexGrow: 1, my: 8 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          style={{
            display: "flex",
            justifyContent: "left",
            textAlign: "right",
          }}
        >
          <img width="400px" src={treatmentPic} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={7}
          style={{ ...verticalCenter, textAlign: "left" }}
        >
          <Box>
            <Typography variant="h4" style={{fontSize:45}}>
              Exceptional Dental Care on <br /> Your Terms
            </Typography>
            <br /> <br />
            <Typography variant="xs" style={{fontWeight:400,color:'gray'}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              numquam reprehenderit quo ab, perspiciatis fuga iure iste
              repudiandae nulla porro rerum corporis odio itaque eius velit.
              Autem, magnam! Cum dolorum ea labore, tempora accusantium minima.
              Illo quia voluptatibus ipsum temporibus.
            </Typography>
            <br /> <br /> <br /> <br />
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED",color:'black' }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalCare;
