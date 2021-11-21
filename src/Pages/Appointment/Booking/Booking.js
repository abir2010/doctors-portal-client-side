import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";

const Booking = (props) => {
  const { name, time, space, price } = props.booking;
  const [Bookingopen, setBookingOpen] = useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Price : $ {price}
          </Typography>
          <Typography variant="caption" gutterBottom component="div">
            {space} spaces available
          </Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            sx={{ color: "InfoBackground.main", fontWeight: 600 }}
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={props.date}
        booking={props.booking}
        Bookingopen={Bookingopen}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={props.setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
