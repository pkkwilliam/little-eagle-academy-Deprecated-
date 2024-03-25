import Link from "next/link";
import React from "react";

const CouponForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row-first">
        <label>Username or email
          <span className="required">*</span></label>
        <input type="text" placeholder="Username or email" required />
      </div>
      <div className="form-row-last">
        <label>Password <span className="required">*</span></label>
        <input type="text" placeholder="Password" required />
      </div>
      <div className="form-row">
        <div className="form-row-check-wrap">
          <div className="bd-login-btn">
            <button className="bd-btn" type="submit">
              <span className="bd-btn-inner">
                <span className="bd-btn-normal">Login</span>
                <span className="bd-btn-hover">Login</span>
              </span>
            </button>
          </div>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div>
      </div>
      <p className="lost-password">
        <Link href="/forgot-password">Lost your password?</Link>
      </p>
    </form>
  );
};

export default CouponForm;
