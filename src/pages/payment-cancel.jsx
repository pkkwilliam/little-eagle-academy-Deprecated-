import React from "react";
import { useRouter } from "next/router";

const PaymentCancel = (props) => {
  const router = useRouter();
  const { transaction_id } = router.query;

  return (
    <div>
      <h1>Payment Cancel</h1>
      <h2>{transaction_id}</h2>
    </div>
  );
};

export default PaymentCancel;
