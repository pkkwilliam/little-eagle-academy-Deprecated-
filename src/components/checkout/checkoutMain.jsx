import React, { useState } from 'react';
import CouponArea from './coupon-area';
import useCartInfo from '@hooks/use-cart-info';
import { useSelector } from 'react-redux';

const CheckoutMain = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [createAccount, setCreateAccount] = useState(false);
    const [shipBox, setShipBox] = useState(false);

    const { cartProducts } = useSelector(state => state.cart);
    const { total } = useCartInfo();

    return (
        <>
            <CouponArea />

            <section className="checkout-area pb-70">
                <div className="container container-small">
                    <form onSubmit={handleSubmit}>
                        <div className="row wow fadeInUp" data-wow-delay=".3s">
                            <div className="col-lg-6">
                                <div className="checkbox-form">
                                    <h3>Billing Details</h3>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="country-select">
                                                <label>Country <span className="required">*</span></label>
                                                <select className="bd-nice-select">
                                                    <option defaultValue="bd">Bangladesh</option>
                                                    <option defaultValue="arg">Algeria</option>
                                                    <option defaultValue="afg">Afghanistan</option>
                                                    <option defaultValue="gha">Ghana</option>
                                                    <option defaultValue="alb">Albania</option>
                                                    <option defaultValue="bhr">Bahrain</option>
                                                    <option defaultValue="clmb">Colombia</option>
                                                    <option defaultValue="dr">Dominican Republic</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>First Name <span className="required">*</span></label>
                                                <input type="text" placeholder="First Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Last Name <span className="required">*</span></label>
                                                <input type="text" placeholder="Last Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Company Name</label>
                                                <input type="text" placeholder="Company Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Address <span className="required">*</span></label>
                                                <input type="text" placeholder="Street address" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Town / City <span className="required">*</span></label>
                                                <input type="text" placeholder="Town / City" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>State / County <span className="required">*</span></label>
                                                <input type="text" placeholder="State / County" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Postcode / Zip <span className="required">*</span></label>
                                                <input type="text" placeholder="Postcode / Zip" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" placeholder="Write Email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="text" placeholder="Postcode / Zip" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list create-acc">
                                                <input id="cbox1" type="checkbox" onClick={() => setCreateAccount(!createAccount)} checked={createAccount} readOnly />
                                                <label htmlFor='cbox1'>Create an account?</label>
                                            </div>
                                            {createAccount && (
                                                <div id="cbox_info" className="checkout-form-list create-account">
                                                    <p className='pb-10'>
                                                        Create an account by entering the information below.
                                                        If you are a returning customer please login at the
                                                        top of the page.
                                                    </p>
                                                    <label>Account Username <span className="required">*</span></label>
                                                    <input type="text" placeholder="Username" required className='mb-30' />
                                                    <label>Account password <span className="required">*</span></label>
                                                    <input type="password" placeholder="password" required />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="different-address">
                                        <div className="ship-different-title">
                                            <label htmlFor='ship-box'>Ship to a different address?</label>
                                            <input onClick={() => setShipBox(!shipBox)} id="ship-box" type="checkbox" checked={shipBox} readOnly />
                                        </div>
                                        {shipBox && (
                                            <div id="ship-box-info">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="country-select">
                                                            <label>Country <span className="required">*</span></label>
                                                            <select className="bd-nice-select">
                                                                <option defaultValue="bd">Bangladesh</option>
                                                                <option defaultValue="arg">Algeria</option>
                                                                <option defaultValue="afg">Afghanistan</option>
                                                                <option defaultValue="gha">Ghana</option>
                                                                <option defaultValue="alb">Albania</option>
                                                                <option defaultValue="bhr">Bahrain</option>
                                                                <option defaultValue="clmb">Colombia</option>
                                                                <option defaultValue="dr">Dominican Republic</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>First Name <span className="required">*</span></label>
                                                            <input type="text" placeholder="First Name" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Last Name <span className="required">*</span></label>
                                                            <input type="text" placeholder="Last Name" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <label>Company Name</label>
                                                            <input type="text" placeholder="Company Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <label>Address <span className="required">*</span></label>
                                                            <input type="text" placeholder="Street address" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <label>Town / City
                                                                <span className="required">*</span></label>
                                                            <input type="text" placeholder="Town / City" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>State / County
                                                                <span className="required">*</span></label>
                                                            <input type="text" placeholder="State / County" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Postcode / Zip
                                                                <span className="required">*</span></label>
                                                            <input type="text" placeholder="Postcode / Zip" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Email Address
                                                                <span className="required">*</span></label>
                                                            <input type="email" placeholder="Write Email" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Phone <span className="required">*</span></label>
                                                            <input type="text" placeholder="Phone" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="order-notes">
                                            <div className="checkout-form-list">
                                                <label>Order Notes</label>
                                                <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="your-order mb-30">
                                    <h3>Your order</h3>
                                    <div className="your-order-table table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartProducts.map((item, index) => (
                                                    <tr className="cart_item" key={index}>
                                                        <td className="product-name">
                                                            {item.title} <strong className="product-quantity"> × {item?.quantity}</strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="amount">${item?.quantity * item.price}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr className="cart-subtotal">
                                                    <th>Cart Subtotal</th>
                                                    <td><span className="amount">${parseFloat(total)}</span></td>
                                                </tr>
                                                <tr className="shipping">
                                                    <th>Shipping</th>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                <input id="flat_shipping" type="radio" name="shipping" />
                                                                <label htmlFor="flat_shipping">
                                                                    Flat Rate: <span className="amount">$7.00</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input id="free_shipping" type="radio" name="shipping" />
                                                                <label htmlFor="free_shipping">Free Shipping:</label>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Order Total</th>
                                                    <td>
                                                        <strong><span className="amount">${parseFloat(total)}</span></strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="payment-method">
                                        <div className="accordion" id="checkoutAccordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="checkoutOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
                                                        Direct Bank Transfer
                                                    </button>
                                                </h2>
                                                <div id="bankOne" className="accordion-collapse collapse show"
                                                    aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Make your payment directly into our bank account.
                                                        Please use your Order ID as the payment reference.
                                                        Your order won’t be shipped until the funds have
                                                        cleared in our account.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="paymentTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
                                                        Cheque Payment
                                                    </button>
                                                </h2>
                                                <div id="payment" className="accordion-collapse collapse" aria-labelledby="paymentTwo"
                                                    data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Please send your cheque to Store Name, Store Street,
                                                        Store Town, Store State / County, Store Postcode.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="paypalThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#paypal" aria-expanded="false" aria-controls="paypal">
                                                        PayPal
                                                    </button>
                                                </h2>
                                                <div id="paypal" className="accordion-collapse collapse" aria-labelledby="paypalThree"
                                                    data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Pay via PayPal; you can pay with your credit card if
                                                        you don’t have a PayPal account.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-button-payment mt-20">
                                            <button type="submit">
                                                Place Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CheckoutMain;