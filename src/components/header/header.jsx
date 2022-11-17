import React from "react";
import "../../Assets/scss/style.scss";
import "../../Assets/scss/plugins/owl-carousel/owl.carousel.scss";
import LoginModal from "../modals/login-modal";
import CartMenu from "./partials/cart-menu";
import CategoryMenu from "./partials/category-menu";
import HeaderSearch from "./partials/header-search";
import MainMenu from "./partials/main-menu";
import WishlistMenu from "./partials/wishlist-menu";

function Header () {
    
    function openMobileMenu () {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }


    return (
        <header className="header header-2 header-intro-clearance">
            <div className="header-top">
                <div className="container">
                    <div className="header-left overflow-hidden mr-3 mr-sm-0">
                        <div className="welcome-msg d-flex flex-nowrap">
                            <p>Special collection already available.</p>&nbsp;<a href="/">Read more ...</a>
                        </div>
                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                
                                <ul>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="/">USD</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="/">Eur</a></li>
                                                    <li><a href="/">Usd</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="/">English</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="/">English</a></li>
                                                    <li><a href="/">French</a></li>
                                                    <li><a href="/">Spanish</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <LoginModal />
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler" onClick={ openMobileMenu }>
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <a href="/" className="logo">
                            <img src="/images/logo/ncommerce-logos_white_orange.png" alt="NCommerce Logo" width={ 70 } height={ 27 } />
                        </a>
                    </div>

                    <div className="header-center">
                        <HeaderSearch />
                    </div>

                    <div className="header-right">
                        <div className="account">
                            <a href="/account/dashboard" title="My account">
                                <div className="icon">
                                    <i className="icon-user"></i>
                                </div>
                                <p>Account</p>
                            </a>
                        </div>
                        <WishlistMenu />
                        <CartMenu />
                    </div>
                </div>
            </div>

            <div>
                <div className="header-bottom sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <CategoryMenu />
                        </div>

                        <div className="header-center">
                            <MainMenu />
                        </div>

                        <div className="header-right overflow-hidden">
                            <i className="la la-lightbulb-o"></i><p className="text-truncate">Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;