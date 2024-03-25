import useCartInfo from '@hooks/use-cart-info';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart_product, clear_cart, decrease_quantity, remove_cart_product } from 'src/redux/features/cart-slice';

const CartMain = () => {

    const { cartProducts } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { total } = useCartInfo();

    const handleChange = (e) => { }

    return (
        <>
            {cartProducts.length === 0 &&
                <div className="container">
                    <div className="empty-text pt-100 pb-100 text-center">
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            }
            {cartProducts.length >= 1 &&
                <div className="cart-area pt-100 pb-100">
                    <div className="container">
                        <div className="row wow fadeInUp" data-wow-delay=".3s">
                            <div className="col-12">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartProducts.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="product-thumbnail">
                                                        <Link href={`/shop-details/${item.id}`}><Image src={item?.productImg} style={{ width: "100%", height: "100%" }} alt="img not found" /></Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="amount">${item.price}</span>
                                                    </td>
                                                    <td className="product-quantity text-center">
                                                        <div className="product-quantity mt-10 mb-10">
                                                            <div className="product-quantity-form">
                                                                <form onSubmit={e => e.preventDefault()}>
                                                                    <button className="cart-minus" type='button' onClick={() => dispatch(decrease_quantity(item))}>
                                                                        <i className="far fa-minus"></i>
                                                                    </button>
                                                                    <input className="cart-input" type="text" onChange={handleChange} value={item?.quantity} />
                                                                    <button className="cart-plus" type='button' onClick={() => dispatch(cart_product(item))}>
                                                                        <i className="far fa-plus"></i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="amount">${item?.quantity * item.price}</span>
                                                    </td>
                                                    <td className="product-remove">
                                                        <button type='button' onClick={() => dispatch(remove_cart_product(item))}><i className="fa fa-times"></i></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="coupon-all">
                                    <div className="coupon d-flex align-items-center">
                                        <input id="coupon_code" className="input-text" name="coupon_code" placeholder="Coupon code"
                                            type="text" />
                                        <button name="apply_coupon" type="submit" className="bd-btn">
                                            <span className="bd-btn-inner">
                                                <span className="bd-btn-normal">Apply Coupon</span>
                                                <span className="bd-btn-hover">Apply Coupon</span>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="coupon2">
                                        <button className="bd-btn" name="update_cart" type="button" onClick={() => dispatch(clear_cart())}>
                                            <span className="bd-btn-inner">
                                                <span className="bd-btn-normal">Update Cart</span>
                                                <span className="bd-btn-hover">Update Cart</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 ml-auto">
                                <div className="cart-page-total">
                                    <h2>Cart totals</h2>
                                    <ul className="mb-30">
                                        <li>Subtotal <span>${parseFloat(total)}</span></li>
                                        <li>Total <span>${parseFloat(total)}</span></li>
                                    </ul>
                                    <div className="bd-checkout-btn">
                                        <Link href="/checkout">Proceed to Checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default CartMain;