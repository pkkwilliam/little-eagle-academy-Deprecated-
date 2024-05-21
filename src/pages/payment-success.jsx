import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Wrapper } from "@layout/index";
import Footer from "@layout/footers/footer";
import HeaderFour from "@layout/headers/headerFour";
import PaymentMain from "@components/payment/payment-main";
import { clear_cart_force } from "src/redux/features/cart-slice";
import { useDispatch } from "react-redux";

const PaymentSuccess = (props) => {
  const router = useRouter();
  const { transaction_id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    // clean the cart up as payment is successful
    dispatch(clear_cart_force());
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <PaymentMain transactionId={transaction_id} />
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default PaymentSuccess;
