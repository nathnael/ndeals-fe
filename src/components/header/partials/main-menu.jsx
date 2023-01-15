import { useLocation } from 'react-router-dom';


function MainMenu() {

    // let path = router.asPath;
    const path = useLocation().pathname;

    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li className={ `megamenu-container ${ path === '/' ? 'active' : '' }` } id="menu-home">
                    <a href="/">Home</a>                    
                </li>
                <li className={ path.indexOf( "/shop" ) > -1 ? 'active' : '' }>
                    <a href="/shop" className="sf-with-ul">Shop</a>
                    <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <div className="menu-col">
                                    <div className="menu-title">Collections</div>
                                    <ul>
                                        <li className=''><a href="/shop/women">Women</a></li>
                                        <li className=''><a href="/shop/men">Men</a></li>
                                        <li className=''><a href="/shop/kids"><span>Kids<span className="tip tip-new">New</span></span></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="banner banner-overlay">
                                    <a href="/product/centered/dark-yellow-lace-cut-out-swing-dress">
                                        <img src="/images/menu/banner-2.jpg" alt="Banner" />

                                        <div className="banner-content banner-content-bottom">
                                            <div className="banner-title text-white">New Trends<br /><span><strong>spring { ( new Date() ).getFullYear() }</strong></span></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={ path.indexOf( "/about-us" ) > -1 ? 'active' : '' }>
                    <a href="/about-us">About Us</a>
                </li>
                <li className={ path.indexOf( "/contact-us" ) > -1 ? 'active' : '' }>
                    <a href="/contact-us">Contact Us</a>
                </li>
                <li className={ path.indexOf( "/faqs" ) > -1 ? 'active' : '' }>
                    <a href="/faqs">FAQs</a>
                </li>
                <li className={ path.indexOf( "/blog" ) > -1 ? 'active' : '' }>
                    <a href="/blog">Blog</a>
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;