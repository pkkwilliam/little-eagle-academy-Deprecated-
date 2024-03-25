import useSticky from '@hooks/use-sticky';
import React, { useState } from 'react';
import logo from "@assets/img/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import TopbarThree from "./component/topbar/topbarThree"
import Menus from './menus';
import SearchPopup from './component/search-popup';
import OffCanvasMain from '@components/common/off-canvas';
import CartSidebar from '@components/common/sidebar/cart-sidebar';
import useCartInfo from '@hooks/use-cart-info';

const HeaderThree = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { sticky } = useSticky();
    const { quantity } = useCartInfo();
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
    return (
        <>
            <header>
                <div className="bd-header">
                    <TopbarThree />
                    <div id="header-sticky" className={`bd-header-bottom bd-header-transparent ${sticky ? "header-sticky" : ""}`}>
                        <div className="container">
                            <div className="mega-menu-wrapper p-relative">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="bd-header-logo">
                                        <Link href="/">
                                            <Image src={logo} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        </Link>
                                    </div>
                                    <div className="bd-main-menu d-none d-lg-flex align-items-center">
                                        <nav id="mobile-menu">
                                            <Menus />
                                        </nav>
                                        <div className="bd-search-btn-wrapper">
                                            <button className="bd-search-open-btn" type='button' onClick={() => setIsSearchOpen(true)}>
                                                <i className="flaticon-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="bd-header-bottom-right d-flex justify-content-end align-items-center">
                                        <div className="bd-header-meta-items-3 d-flex align-items-center">
                                            <div className="bd-header-meta-item bd-header-menu-meta d-flex align-items-center">
                                                <div className="bd-header-meta-icon-3 bd-wistlist">
                                                    <Link href="/wishlist"> <i className="fa-regular fa-heart"></i></Link>
                                                </div>
                                            </div>
                                            <div className="bd-header-meta-item bd-header-menu-meta d-flex align-items-center">
                                                <div className="bd-header-meta-icon-3 bd-header-cart">
                                                    <a href="#"><i className="fa-regular fa-cart-shopping"></i>
                                                        <span className="bd-header-cart-count">{quantity}</span>
                                                    </a>
                                                    <CartSidebar />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bd-header-btn d-none d-xl-block">
                                            <Link href="/contact" className="bd-btn">
                                                <span className="bd-btn-inner">
                                                    <span className="bd-btn-normal">Get In Touch</span>
                                                    <span className="bd-btn-hover">Get In Touch</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="header-hamburger">
                                            <button type="button" className="hamburger-btn offcanvas-open-btn" onClick={() => setIsOffCanvasOpen(true)}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* search modal start */}
            <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
            {/* search modal end */}

            {/* full canvas area start */}
            <OffCanvasMain isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
            {/* full canvas area end */}
        </>
    );
};

export default HeaderThree;