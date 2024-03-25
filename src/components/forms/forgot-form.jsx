import Email from "@svg/email";
import React from "react";

const ForgotForm = () => {
  return (
    <form>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input type="email" placeholder="Email" />
            <span><Email /></span>
          </div>
        </div>
      </div>
      <div className="login__btn text-center">
        <button type="submit" className="bd-btn">
          <span className="bd-btn-inner">
            <span className="bd-btn-normal">Send Request</span>
            <span className="bd-btn-hover">Send Request</span>
          </span>
        </button>
      </div>
    </form>
  );
};

export default ForgotForm;
