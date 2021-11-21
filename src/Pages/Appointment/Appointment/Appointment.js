import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailabelAppointments from "../AvailabelAppointments/AvailabelAppointments";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailabelAppointments
        date={date}
        setDate={setDate}
      ></AvailabelAppointments>
    </div>
  );
};

export default Appointment;
