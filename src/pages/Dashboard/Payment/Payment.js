import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});


    const stripePromise = loadStripe('pk_test_51Jw3ozCQOwvl2oxzdz4cgkECJsvjqeixmgELuYtxMjQDGWsy4pSbPqCJi8MyG2lvVDIVEWU4yNwZxj2LpV88k3KP00L2172Brq') //stripe এর Publishable key


    useEffect( () => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [appointmentId]);
    return (
        <div>
            {/* <h2> Please pay for: {appointmentId}</h2> */}
            <h2> Please pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            
            {
                appointment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        //    price={appointment.price} 
                        appointment={appointment}
                    />
                </Elements>
            }
            
        </div>
    );
};

export default Payment;