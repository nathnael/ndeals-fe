function MainMenu() {

    function showAllDemos( e ) {
        let demoItems = document.querySelectorAll( '.demo-item.hidden' );

        for ( let i = 0; i < demoItems.length; i++ ) {
            demoItems[ i ].classList.toggle( 'show' );
        }

        document.querySelector( '.view-all-demos' ).classList.toggle( 'disabled-hidden' );
        e.preventDefault();
    }

    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li className={ 'megamenu-container active' } id="menu-home">
                    <a href="/" className="sf-with-ul">Home</a>

                    <div className="megamenu demo">
                        <div className="menu-col">
                            <div className="menu-title">Choose your demo</div>

                            <div className="demo-list">
                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-1` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/1.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">01 - furniture store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-2` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/2.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">02 - furniture store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-3` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/3.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">03 - electronic store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-4` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/4.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">04 - electronic store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-5` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/5.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">05 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-6` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/6.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">06 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-7` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/7.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">07 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-8` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/8.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">08 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-9` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/9.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">09 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item">
                                    <a href={ `${ process.env.APP_URL }demo-10` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/10.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">10 - shoes store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-11` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/11.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">11 - furniture simple store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-12` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/12.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">12 - fashion simple store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-13` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/13.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">13 - market</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-14` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/14.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">14 - market fullwidth</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-15` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/15.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">15 - lookbook 1</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-16` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/16.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">16 - lookbook 2</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-17` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/17.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">17 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-18` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/18.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">18 - fashion store (with sidebar)</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-19` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/19.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">19 - games store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-20` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/20.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">20 - book store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-21` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/21.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">21 - sport store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-22` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/22.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">22 - tools store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-23` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/23.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">23 - fashion left navigation store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-24` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/24.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">24 - extreme sport store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-25` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/25.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">25 - jewelry store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-26` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/26.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">26 - market store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-27` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/27.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">27 - fashion store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-28` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/28.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">28 - food market store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-29` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/29.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">29 - t-shirts store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-30` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/30.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">30 - headphones store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-31` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/31.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">31 - yoga store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-32` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/32.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">32 - sunglasses store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-33` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/33.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">33 - cosmetics store</span>
                                    </a>
                                </div>

                                <div className="demo-item hidden">
                                    <a href={ `${ process.env.APP_URL }demo-34` }>
                                        <span
                                            className="demo-bg"
                                            style={ { backgroundImage: "url( 'images/menu/demos/34.jpg' )" } }
                                        ></span>
                                        <span className="demo-title">34 - car parts</span>
                                    </a>
                                </div>
                            </div>

                            <div className="megamenu-action text-center">
                                <a
                                    href="/"
                                    className="btn btn-outline-primary-2 view-all-demos"
                                    onClick={ showAllDemos }
                                >
                                    <span>View All Demos</span>
                                    <i className="icon-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className=''>
                    <a href="/shop/sidebar/list" className="sf-with-ul" scroll={ false }>Shop</a>

                    <div className="megamenu megamenu-md">
                        <div className="row no-gutters">
                            <div className="col-md-8">
                                <div className="menu-col">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="menu-title">Shop with sidebar</div>
                                            <ul>
                                                <li className=''><a href="/shop/sidebar/list" scroll={ false }>Shop List</a></li>
                                                <li className=''><a href="/shop/sidebar/2cols" scroll={ false }>Shop Grid 2 Columns</a></li>
                                                <li className=''><a href="/shop/sidebar/3cols" scroll={ false }>Shop Grid 3 Columns</a></li>
                                                <li className=''><a href="/shop/sidebar/4cols" scroll={ false }>Shop Grid 4 Columns</a></li>
                                                <li className=''><a href="/shop/market"><span>Shop Market<span className="tip tip-new">New</span></span></a></li>
                                            </ul>

                                            <div className="menu-title">Shop no sidebar</div>
                                            <ul>
                                                <li className=''><a href="/shop/nosidebar/boxed" scroll={ false }><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                                <li className=''><a href="/shop/nosidebar/fullwidth" scroll={ false }>Shop Fullwidth No Sidebar</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="menu-title">Product Category</div>
                                            <ul>
                                                <li className=''><a href="/shop/category/boxed" scroll={ false }>Product Category Boxed</a></li>
                                                <li className=''><a href="/shop/category/fullwidth" scroll={ false }><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                            </ul>
                                            <div className="menu-title">Shop Pages</div>
                                            <ul>
                                                <li className=''><a href="/shop/cart">Cart</a></li>
                                                <li className=''><a href="/shop/checkout">Checkout</a></li>
                                                <li className=''><a href="/shop/wishlist">Wishlist</a></li>
                                                <li className=''><a href="/shop/dashboard">My Account</a></li>
                                                <li className=''><a href="/">Lookbook</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="banner banner-overlay">
                                    <a href="/shop/sidebar/list" className="banner banner-menu">
                                        <img src="images/menu/banner-1.jpg" alt="Banner" />

                                        <div className="banner-content banner-content-top">
                                            <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className=''>
                    <a href="/product/default/dark-yellow-lace-cut-out-swing-dress" className="sf-with-ul">Product</a>

                    <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <div className="menu-col">
                                    <div className="menu-title">Product Details</div>
                                    <ul>
                                        <li className=''><a href="/product/default/dark-yellow-lace-cut-out-swing-dress">Default</a></li>
                                        <li className=''><a href="/product/centered/beige-ring-handle-circle-cross-body-bag">Centered</a></li>
                                        <li className=''><a href="/product/extended/yellow-tie-strap-block-heel-sandals"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                        <li className=''><a href="/product/gallery/beige-metal-hoop-tote-bag">Gallery</a></li>
                                        <li className=''><a href="/product/sticky/brown-faux-fur-longline-coat">Sticky Info</a></li>
                                        <li className=''><a href="/product/sidebar/beige-v-neck-button-cardigan">Boxed With Sidebar</a></li>
                                        <li className=''><a href="/product/fullwidth/black-faux-leather-chain-trim-sandals">Full Width</a></li>
                                        <li className=''><a href="/product/masonry/black-denim-dungaree-dress">Masonry Sticky Info</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="banner banner-overlay">
                                    <a href="/product/centered/dark-yellow-lace-cut-out-swing-dress">
                                        <img src="images/menu/banner-2.jpg" alt="Banner" />

                                        <div className="banner-content banner-content-bottom">
                                            <div className="banner-title text-white">New Trends<br /><span><strong>spring { ( new Date() ).getFullYear() }</strong></span></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className=''>
                    <a href="/" className="sf-with-ul">Pages</a>

                    <ul>
                        <li className=''>
                            <a href="/pages/about" className="sf-with-ul">About</a>

                            <ul>
                                <li className=''><a href="/pages/about">About 01</a></li>
                                <li className=''><a href="/pages/about-2">About 02</a></li>
                            </ul>
                        </li>
                        <li className=''>
                            <a href="/pages/contact" className="sf-with-ul">Contact</a>

                            <ul>
                                <li className=''><a href="/pages/contact">Contact 01</a></li>
                                <li className=''><a href="/pages/contact-2">Contact 02</a></li>
                            </ul>
                        </li>
                        <li className=''><a href="/pages/login">Login</a></li>
                        <li className=''><a href="/pages/faq">FAQs</a></li>
                        <li className=''><a href="/404">Error 404</a></li>
                        <li className=''><a href="/pages/coming-soon">Coming Soon</a></li>
                    </ul>
                </li>
                <li className=''>
                    <a href="/blog/classic" className="sf-with-ul">Blog</a>

                    <ul>
                        <li className=''><a href="/blog/classic">Classic</a></li>
                        <li className=''><a href="/blog/listing" >Listing</a></li>
                        <li className=''>
                            <a href="/blog/grid/2cols" className="sf-with-ul">Grid</a>
                            <ul>
                                <li className=''><a href="/blog/grid/2cols">Grid 2 columns</a></li>
                                <li className=''><a href="/blog/grid/3cols">Grid 3 columns</a></li>
                                <li className=''><a href="/blog/grid/4cols">Grid 4 columns</a></li>
                                <li className=''><a href="/blog/grid/sidebar">Grid sidebar</a></li>
                            </ul>
                        </li>
                        <li className=''>
                            <a href="/blog/masonry/2cols" className="sf-with-ul">Masonry</a>
                            <ul>
                                <li className=''><a href="/blog/masonry/2cols">Masonry 2 columns</a></li>
                                <li className=''><a href="/blog/masonry/3cols">Masonry 3 columns</a></li>
                                <li className=''><a href="/blog/masonry/4cols">Masonry 4 columns</a></li>
                                <li className=''><a href="/blog/masonry/sidebar">Masonry sidebar</a></li>
                            </ul>
                        </li>
                        <li className=''>
                            <a href="/blog/mask/grid" className="sf-with-ul">Mask</a>
                            <ul>
                                <li className=''><a href="/blog/mask/grid">Blog Mask Grid</a></li>
                                <li className=''><a href="/blog/mask/masonry">Blog Mask Masonry</a></li>
                            </ul>
                        </li>
                        <li className=''>
                            <a href="/blog/single/default/cras-ornare-tristique-elit." className="sf-with-ul">Single Post</a>
                            <ul>
                                <li className=''><a href="/blog/single/default/cras-ornare-tristique-elit.">Default with sidebar</a></li>
                                <li className=''><a href="/blog/single/fullwidth/fusce-pellentesque-suscipit.">Fullwidth no sidebar</a></li>
                                <li className=''><a href="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo">Fullwidth with sidebar</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className=''>
                    <a href="/elements" className="sf-with-ul">Elements</a>

                    <ul>
                        <li className=''><a href="/elements/products">Products</a></li>
                        <li className=''><a href="/elements/typography">Typography</a></li>
                        <li className=''><a href="/elements/titles">Titles</a></li>
                        <li className=''><a href="/elements/banners">Banners</a></li>
                        <li className=''><a href="/elements/categories">Product Category</a></li>
                        <li className=''><a href="/elements/video-banners">Video Banners</a></li>
                        <li className=''><a href="/elements/buttons">Buttons</a></li>
                        <li className=''><a href="/elements/accordions">Accordions</a></li>
                        <li className=''><a href="/elements/tabs">Tabs</a></li>
                        <li className=''><a href="/elements/testimonials">Testimonials</a></li>
                        <li className=''><a href="/elements/blog-posts">Blog Posts</a></li>
                        <li className=''><a href="/elements/cta">Call to Action</a></li>
                        <li className=''><a href="/elements/icon-boxes">Icon Boxes</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;