import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Alert, Container, Typography } from "@mui/material";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 pm - 09.00 pm",
    price: 50,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "05.00 pm - 06.00 pm",
    price: 75,
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "07.00 pm - 08.00 pm",
    price: 55,
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "02.00 pm - 04.00 pm",
    price: 60,
    space: 10,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "05.00 pm - 06.00 pm",
    price: 45,
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "03.00 pm - 05.00 pm",
    price: 70,
    space: 10,
  },
];

const AvailabelAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ color: "info.main", my: 4, fontWeight: 600 }}
      >
        Available Appointments on {date.toDateString()}
      </Typography>
      {bookingSuccess && (
        <Alert severity="success">Booked successfully !</Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailabelAppointments;
