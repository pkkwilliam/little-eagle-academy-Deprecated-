import footer_data from "@data/footer-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import tab_1 from "@assets/img/shop/9.1.jpg";
import tab_2 from "@assets/img/shop/8.1.jpg";
import tab_3 from "@assets/img/shop/8.3.png";

const ShopModal = ({ item }) => {
  const { product } = useSelector(state => state.products);

  return (
    <div className="modal bd-shop-modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title d-none" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="product-d-img-tab-wrapper mb-60">
                    <div className="product-d-img-nav">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="pro-1-tab" data-bs-toggle="tab"
                            data-bs-target="#pro-1" type="button" role="tab" aria-controls="pro-1"
                            aria-selected="false">
                            {product?.productImg && <Image src={product?.productImg} style={{ width: "100%", height: "100%" }} alt="img not found" />}
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pro-2-tab" data-bs-toggle="tab" data-bs-target="#pro-2"
                            type="button" role="tab" aria-controls="pro-2" aria-selected="true">
                            <Image src={tab_1} style={{ width: "100%", height: "100%" }} alt="img not found" />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pro-3-tab" data-bs-toggle="tab" data-bs-target="#pro-3"
                            type="button" role="tab" aria-controls="pro-3" aria-selected="false">
                            <Image src={tab_2} style={{ width: "100%", height: "100%" }} alt="img not found" />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pro-4-tab" data-bs-toggle="tab" data-bs-target="#pro-4"
                            type="button" role="tab" aria-controls="pro-4" aria-selected="false">
                            <Image src={tab_3} style={{ width: "100%", height: "100%" }} alt="img not found" />
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-d-img-tab">
                      <div className="tab-content" id="productDetailsTab">
                        <div className="tab-pane fade active show" id="pro-1" role="tabpanel"
                          aria-labelledby="pro-1-tab">
                          {product?.productImg && <Image src={product?.productImg} style={{ width: "100%", height: "100%" }} className="active" alt="img not found" />}
                        </div>
                        <div className="tab-pane fade" id="pro-2" role="tabpanel" aria-labelledby="pro-2-tab">
                          <Image src={tab_1} style={{ width: "100%", height: "100%" }} className="active" alt="img not found" />
                        </div>
                        <div className="tab-pane fade" id="pro-3" role="tabpanel" aria-labelledby="pro-3-tab">
                          <Image src={tab_2} style={{ width: "100%", height: "100%" }} className="active" alt="img not found" />
                        </div>
                        <div className="tab-pane fade" id="pro-4" role="tabpanel" aria-labelledby="pro-4-tab">
                          <Image src={tab_3} style={{ width: "100%", height: "100%" }} className="active" alt="img not found" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="product-side-info mb-60">
                    <div className="product-category-review">
                      <div className="product-d-category">Organic, Food</div>
                      <div className="product-d-review">
                        <div className="rating">
                          <a href="#"><i className="fas fa-star"></i></a>
                          <a href="#"><i className="fas fa-star"></i></a>
                          <a href="#"><i className="fas fa-star"></i></a>
                          <a href="#"><i className="fas fa-star"></i></a>
                          <a href="#"><i className="far fa-star"></i></a>
                        </div>
                        <span>10 Reviews</span>
                      </div>
                    </div>
                    <h4 className="product-name"><Link href={`/shop-details/${product?.id}`}>{product?.title}</Link></h4>
                    <div className="product-price">
                      {product?.discount && <span className="price-old">${product?.discount}</span>}
                      <span className="price-now">${product?.price}</span>
                    </div>

                    <p className="mb-30">
                      Kindedo seemed great for my kindergartener-to-be, a full santa believer. Not so the winter
                      holiday
                      episode, and {`I'm`} not sure how {`I'm`} going to police. I really happy to see my child there
                    </p>
                    <div className="product-quantity-cart mb-30" >
                      <span data-bs-dismiss="modal" aria-label="Close"><Link href="/cart" className="bd-cart-btn"><i className="fas fa-shopping-basket"></i>Add to Cart</Link></span>
                    </div>
                    <div className="product-d-meta sku mb-10">
                      <span>SKU:</span>
                      <span>BO1D0MX8SJ</span>
                    </div>
                    <div className="product-d-meta ockcategories mb-10">
                      <span>Categories:</span>
                      <span>Garden, Flower, Leaf</span>
                    </div>
                    <div className="product-d-meta tags mb-10">
                      <span>Tags:</span>
                      <span>Vegetable, Flower, Leaf</span>
                    </div>
                    <div className="product-d-meta share mb-10">
                      <span>Share:</span>
                      <div className="social-links">
                        <ul>
                          {footer_data.description.social_icons.map((item) => (
                            <li key={item.id}>
                              <a target="_blank" href={item.url} rel="noreferrer">
                                <i className={item.icon}></i>{item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
