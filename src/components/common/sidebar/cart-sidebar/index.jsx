import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import useCartInfo from "@hooks/use-cart-info";
import { remove_cart_product } from "src/redux/features/cart-slice";
import CartCheckOut from "@components/cart/cartCheckout";
import PrimaryButton from "@components/common/primary-button";

const CartSidebar = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { total } = useCartInfo();
  return (
    <React.Fragment>
      <div className="bd-header-cart-wrapper">
        {cartProducts.length === 0 && <h5>Your cart is empty</h5>}

        {cartProducts.length >= 1 && (
          <>
            <div className="bd-header-cart-item">
              <ul>
                {cartProducts.map((item, index) => (
                  <li key={index}>
                    <div className="bd-header-cart-content">
                      <div className="bd-header-cart-thumb">
                        {/* <Link href={`/shop-details/${item.id}`}> */}
                        <Image
                          src={item.productImg}
                          style={{ width: "100%", height: "100%" }}
                          alt="img not found"
                        />
                        {/* </Link> */}
                      </div>
                      <div className="bd-header-cart-title-wrapper">
                        <h4 className="bd-header-cart-title">
                          {/* <Link href={`/shop-details/${item.id}`}> */}
                          {item.title}
                          {/* </Link> */}
                        </h4>
                        <div className="product-pricing">
                          {/* <span className="item-number">{item?.quantity}</span> */}
                          {/* <span className="item-number">{` `}</span> */}
                          <p
                            style={{
                              color: "grey",
                              fontSize: 12,
                            }}
                          >
                            {item.subTitles[0]}
                          </p>

                          <span className="price-now">${item.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-header-cart-remove text-end">
                      <button
                        className="remove-item"
                        onClick={() => dispatch(remove_cart_product(item))}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bd-header-cart-total">
              <p>Total:</p>
              <span>${parseFloat(total)}</span>
            </div>
            <div className="bd-header-cart-footer">
              {/* <Link href="/checkout" className="bd-btn">
                <span className="bd-btn-inner">
                  <span className="bd-btn-normal">Checkout</span>
                  <span className="bd-btn-hover">Checkout</span>
                </span>
              </Link> */}
              <CartCheckOut cartProducts={cartProducts}>
                <span className="bd-btn">
                  <span className="bd-btn-inner">
                    <span className="bd-btn-normal">Checkout</span>
                    <span className="bd-btn-hover">Checkout</span>
                  </span>
                </span>
              </CartCheckOut>
              <Link href="/cart" className="bd-btn bd-cart-btn-2">
                <span className="bd-btn-inner">
                  <span className="bd-btn-normal">View Cart</span>
                  <span className="bd-btn-hover">View Cart</span>
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default CartSidebar;
