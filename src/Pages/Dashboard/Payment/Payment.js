import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jy7BOBcMiiTJtUP9JR6EQD4lLI3FvN7g0CXNtksc6TbfOzZ1nHY3eBhEz9UnnYRHXHFS2b2DhTTZfPWRlIfbIZw00SvceolRX"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(
      `https://safe-caverns-59595.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h1>
        Please pay for : {appointment.pName} for {appointment.serviceName}
      </h1>
      <h2>Pay : $ {appointment.price}</h2>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
