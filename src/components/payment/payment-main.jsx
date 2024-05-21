import React, { useEffect, useState } from "react";
import { PAYMENT_SUCCESS } from "src/middleware/api";
import execute from "src/middleware/serviceExecutor";
import PaymentenrollsTable from "./payment-course-enroll-table";
import { Button } from "react-bootstrap";
import PrimaryButton from "@components/common/primary-button";
import { useRouter } from "next/router";

const PaymentMain = (props) => {
  const { transactionId } = props;
  const [paymentResponse, setPaymentResponse] = useState({});
  const router = useRouter();

  useEffect(() => {
    triggerPaymentSuccessServiceRequest();
  }, [transactionId]);

  const triggerPaymentSuccessServiceRequest = async () => {
    if (!transactionId) {
      return;
    }
    const paymentSuccessResponse = await execute(
      PAYMENT_SUCCESS(transactionId)
    );
    setPaymentResponse(paymentSuccessResponse);
  };
  return (
    <div className="cart-area pt-100 pb-100">
      <div className="container">
        <div>
          <h1>Payment Successful!</h1>
          <p>Thank you for your purchase.</p>

          <h2>Transaction Details</h2>
          <p>Date: {paymentResponse.transactionDate}</p>
          <p>Transaction ID: {paymentResponse.transactionId}</p>
        </div>
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          <div className="col-12">
            <PaymentenrollsTable enrolls={paymentResponse.enrolls} />
          </div>
        </div>
        <PrimaryButton onClick={() => router.replace("/")}>
          Return To Home
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PaymentMain;
