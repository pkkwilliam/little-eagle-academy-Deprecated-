import { getErrorMessage } from "@utils/error-code-util";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { REQUEST_PAYMENT } from "src/middleware/api";
import execute from "src/middleware/serviceExecutor";

const CartCheckOut = ({ children, cartProducts, disabled, paymentInfo }) => {
  const router = useRouter();
  return (
    <span
      onClick={() =>
        disabled ? {} : handleOnClickCheckout(router, cartProducts, paymentInfo)
      }
    >
      {children}
    </span>
  );
};

export const handleOnClickCheckout = async (
  router,
  cartProducts,
  paymentInfo
) => {
  const enrolls = cartProducts.map((product) => {
    const { courseId, dateOfBirth, enrollType, lastName, firstName } =
      product.formData;
    return {
      courseId,
      enrollType,
      student: {
        firstName,
        lastName,
        dateOfBirth,
      },
    };
  });
  const paymentRequest = {
    email: paymentInfo.email,
    enrollPaymentRequestDtos: enrolls,
  };
  try {
    const { requestUrl, transactionId } = await execute(
      REQUEST_PAYMENT(paymentRequest)
    );
    router.push(requestUrl);
  } catch (ex) {
    const message = getErrorMessage(ex);
    toast.error(message);
  }
};

export default CartCheckOut;
