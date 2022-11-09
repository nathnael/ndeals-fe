import React, { useState, useEffect } from 'react';


function Footer () {
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );
    const [ containerClass, setContainerClass ] = useState( 'container' );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky () {
        // setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer footer-2">
            <div className="footer-middle">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="widget widget-about">                              
                                
                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-2">
                                            <img src="images/logo/ncommerce-logos_white_orange.png" className="footer-logo" alt="Footer Logo" width="70" height="25" />
                                        </div>
                                        <div className="col-sm-6 col-md-10">
                                            <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title">Got Question? Call us 24/7</span>
                                            <a href="tel:123456789">+0123 456 789</a>
                                        </div>
                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title">Payment Method</span>
                                            <figure className="footer-payments">
                                                <img src="images/payments.png" alt="Payment methods" width="272" height="20" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Information</h4>

                                <ul className="widget-list">
                                    <li><a href="/pages/about">About Molla</a></li>
                                    <li><a href="/pages/about">How to shop on Molla</a></li>
                                    <li><a href="/pages/faq">FAQ</a></li>
                                    <li><a href="/pages/contact">Contact us</a></li>
                                    <li><a href="/pages/login">Log in</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="widget-list">
                                    <li><a href="/">Payment Methods</a></li>
                                    <li><a href="/">Money-back guarantee!</a></li>
                                    <li><a href="/">Returns</a></li>
                                    <li><a href="/">Shipping</a></li>
                                    <li><a href="/">Terms and conditions</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li><a href="/">Sign In</a></li>
                                    <li><a href="/shop/cart">View Cart</a></li>
                                    <li><a href="/shop/wishlist">My Wishlist</a></li>
                                    <li><a href="/">Track My Order</a></li>
                                    <li><a href="/">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ containerClass }>
                    <p className="footer-copyright">Copyright © { ( new Date() ).getFullYear() } NCommerce Store. All Rights Reserved.</p>
                    <ul className="footer-menu">
                        <li><a href="/">Terms Of Use</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <span className="social-label">Social Media</span>

                        <a href="/" className="social-icon social-facebook" rel="noopener noreferrer" title="Facebook"><i className="icon-facebook-f"></i></a>
                        <a href="/" className="social-icon social-twitter" rel="noopener noreferrer" title="Twitter"><i className="icon-twitter"></i></a>
                        <a href="/" className="social-icon social-instagram" rel="noopener noreferrer" title="Instagram"><i className="icon-instagram"></i></a>
                        <a href="/" className="social-icon social-youtube" rel="noopener noreferrer" title="Youtube"><i className="icon-youtube"></i></a>
                        <a href="/" className="social-icon social-pinterest" rel="noopener noreferrer" title="Pinterest"><i className="icon-pinterest"></i></a>
                    </div>
                </div>
            </div>
            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
    );
}

export default React.memo( Footer );