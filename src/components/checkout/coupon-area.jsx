import CouponForm from '@components/forms/coupon-form';
import CouponInfoForm from '@components/forms/coupon-info-form';
import React, { useState } from 'react';

const CouponArea = () => {
    const [checkoutLogin, setCheckoutLogin] = useState(false);
    const [checkoutCoupon, setCheckoutCoupon] = useState(false);
    return (
        <section className="coupon-area pt-100 pb-30">
            <div className="container container-small">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-md-6">
                        <div className="coupon-accordion">
                            <h3>
                                Returning customer? <span id="showlogin" onClick={() => setCheckoutLogin(!checkoutLogin)}>Click here to login</span>
                            </h3>
                            {checkoutLogin && (
                                <div id="checkout-login" className="coupon-content">
                                    <div className="coupon-info">
                                        <p className="coupon-text">
                                            Quisque gravida turpis sit amet nulla posuere lacinia.
                                            Cras sed est sit amet ipsum luctus.
                                        </p>
                                        <CouponForm />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="coupon-accordion">
                            <h3>
                                Have a coupon? <span id="showcoupon" onClick={() => setCheckoutCoupon(!checkoutCoupon)}>Click here to enter your code</span>
                            </h3>
                            {checkoutCoupon && (
                                <div id="checkout_coupon" className="coupon-checkout-content">
                                    <div className="coupon-info">
                                        <CouponInfoForm />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CouponArea;