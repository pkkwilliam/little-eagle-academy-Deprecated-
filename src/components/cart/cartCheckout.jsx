import { getErrorMessage } from "@utils/error-code-util";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { REQUEST_PAYMENT } from "src/middleware/api";
import execute from "src/middleware/serviceExecutor";

const CartCheckOut = ({ children, cartProducts }) => {
  const router = useRouter();

  const handleOnClickCheckout = async () => {
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
  return <span onClick={handleOnClickCheckout}>{children}</span>;
};

export default CartCheckOut;
