import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
    "pk_test_51JVAOFSCwyzaLEznMHXBs0k3v3NwTebxiJXKirhgU1XOJS2KPYdCJrjLbDU7gK5zMFBaGJgXeILKPHgZqNhNrBrX00idGhLSTB";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    );
}
