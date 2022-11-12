import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';
import Countdown from "react-countdown";

import OwlCarousel from '../../features/owl-carousel';
import { rendererThree } from "../../features/count-down";

import { 
    posts,
    introSlider, 
    fadeInRightShorter, 
    fadeInLeftShorter, 
    fadeInUpShorter, 
    fadeIn 
} from '../../utils/data';
import SpecialCollection from './special-collection';
import TopCollection from './top-collection';
import { attrFilter } from '../../utils';
import BlogCollection from './blog-collection';
import NewsletterModal from '../modals/newsletter-modal';
import { getProducts } from '../../actions/productActions';
import { useAlert } from 'react-alert';


function Home() {
    
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, products, error, productsCount } = useSelector(state => state.products);
    const topProducts = attrFilter( products, 'top' );
    
    useEffect(() => {
        if(error) {
            return alert.error(error);
        }

        dispatch(getProducts());        

    }, [dispatch, alert, error]);

    return (
        <>            
            <div className="main home-page skeleton-body">
                <div className="intro-slider-container">
                    <OwlCarousel adclassName="owl-simple intro-slider" options={ introSlider }>
                        <div className="intro-slide" style={ { backgroundColor: '#EDF2F0', backgroundImage: 'url(images/home/sliders/macbook.png)' } }>
                            <div className="container intro-content">
                                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                    <div className="row">
                                        <div className="col-auto offset-lg-3 intro-col">
                                            <h3 className="intro-subtitle">Trade-In Offer</h3>

                                            <h1 className="intro-title">
                                                MacBook Air
                                                <br />Latest Model
                                                <span>
                                                    <sup className="font-weight-light">from</sup>
                                                    <span className="text-primary">
                                                        &nbsp;$999&nbsp;
                                                        <sup>,99</sup>
                                                    </span>
                                                </span>
                                            </h1>
                                            <a href="/shop/sidebar/list" className="btn btn-outline-primary-2">
                                                <span>Shop Now</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                        <div className="intro-slide" style={ { backgroundImage: 'url(images/home/sliders/beanbag_chair_slider.jpg)' } }>
                            <div className="container intro-content">
                                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                    <div className="row">
                                        <div className="col-auto offset-lg-3 intro-col">
                                            <h3 className="intro-subtitle">Trevel & Outdoor</h3>

                                            <h1 className="intro-title">
                                                Original Outdoor
                                                    <br />Beanbag
                                                    <span>
                                                    <sup
                                                        className="font-weight-light old-price"
                                                    >$89,99</sup>
                                                    <span className="text-primary">
                                                        &nbsp;$29&nbsp;
                                                            <sup>,99</sup>
                                                    </span>
                                                </span>
                                            </h1>
                                            <a href="/shop/sidebar/list" className="btn btn-outline-primary-2">
                                                <span>Shop Now</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        <div className="intro-slide" style={ { backgroundColor: '#EDF2F0', backgroundImage: 'url(images/home/sliders/leather_jacket.jpg)' } }>
                            <div className="container intro-content">
                                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                    <div className="row">
                                        <div className="col-auto offset-lg-3 intro-col">
                                            <h3 className="intro-subtitle">Fashion Promotions</h3>

                                            <h1 className="intro-title">
                                                Tan Suede
                                                    <br />Biker Jacket
                                                    <span>
                                                    <sup
                                                        className="font-weight-light old-price"
                                                    >$240,00</sup>
                                                    <span className="text-primary">
                                                        &nbsp;$180&nbsp;
                                                            <sup>,99</sup>
                                                    </span>
                                                </span>
                                            </h1>
                                            <a href="/shop/sidebar/list" className="btn btn-outline-primary-2">
                                                <span>Shop Now</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="owl-carousel owl-theme brands-border owl-simple brand-carousel cols-xl-7 cols-lg-5 cols-md-4 cols-sm-3 cols-2 owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                        <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2447px'}}>
                            <div className="owl-item active" style={{width: '11%'}}>
                                <a className="brand mr-0" href="/">
                                    <img src="images/brands/1.png" alt="brand" width="100" height="23" />                    
                                </a>
                            </div>
                            <div className="owl-item active" style={{width: '11%'}}>
                                <a className="brand mr-0" href="/">
                                    <img src="images/brands/2.png" alt="brand" width="101" height="34" />
                                </a>
                            </div>
                            <div className="owl-item active" style={{width: '11%'}}>
                                <a className="brand mr-0" href="/">
                                    <img src="images/brands/3.png" alt="brand" width="100" height="30" />
                                </a>
                            </div>
                            <div className="owl-item active" style={{width: '11%'}}>
                                <a className="brand mr-0" href="/">
                                    <img src="images/brands/4.png" alt="brand" width="101" height="39" />
                                </a>
                            </div>
                            <div className="owl-item active" style={{width: '11%'}}>
                                <a className="brand mr-0" href="/">
                                    <img src="images/brands/5.png" alt="brand" width="100" height="48" />
                                </a>
                            </div>
                            <div className="owl-item active" style={{width: '11%'}}>
                                <a className="brand mr-0" href="/">
                                    <img src="images/brands/6.png" alt="brand" width="100" height="23" />
                                </a>
                            </div>
                            <div className="owl-item active" style={{width: '11%'}}>
                                <a className="brand mr-0" href="/">
                                    <img src="images/brands/7.png" alt="brand" width="63" height="32" />
                                </a>
                            </div>
                            <div className="owl-item active" style={{width: '11%'}}>
                                <a className="brand mr-0" href="/">
                                    <img src="images/brands/8.png" alt="brand" width="80" height="72" />
                                </a>
                            </div>
                            <div className="owl-item" style={{width: '11%'}}>
                                <a className="brand mr-0" href="/">
                                    <img src="images/brands/9.png" alt="brand" width="100" height="25" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4"></div>
                <div className="banner-group">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-5">
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                                    <div className="banner banner-large banner-overlay banner-overlay-light banner-lg banner-1 lazy-media">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-1.jpg"
                                            threshold={ 200 }
                                            width="100%"
                                            height="auto"
                                            effect="blur"
                                        />

                                        <div className="banner-content banner-content-top">
                                            <h4 className="banner-subtitle">Clearence</h4>
                                            <h3 className="banner-title">Coffee Tables</h3>
                                            <div className="banner-text">from $19.99</div>
                                            <a href="/shop/sidebar/list" className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <Reveal keyframes={ fadeIn } delay={ 150 } duration={ 1000 } triggerOnce>
                                    <div className="banner banner-overlay banner-lg banner-2 lazy-media">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-2.jpg"
                                            threshold={ 200 }
                                            height="auto"
                                            width="100%"
                                            effect="blur"
                                        />

                                        <div className="banner-content banner-content-top">
                                            <h4 className="banner-subtitle text-grey">On Sale</h4>
                                            <h3 className="banner-title text-white">Kitchenware</h3>
                                            <div className="banner-text text-white">from $39.99</div>
                                            <a href="/shop/sidebar/list" className="btn btn-outline-white banner-link">Discover Now<i className="icon-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <Reveal keyframes={ fadeInRightShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 col-sm-6">
                                            <div className="banner banner-3 banner-overlay lazy-media">
                                                <div className="lazy-overlay"></div>

                                                <LazyLoadImage
                                                    alt="banner"
                                                    src="images/home/banners/banner-3.jpg"
                                                    threshold={ 200 }
                                                    height="auto"
                                                    width="100%"
                                                    effect="blur"
                                                />

                                                <div className="banner-content banner-content-top">
                                                    <h4 className="banner-subtitle">New Arrivals</h4>
                                                    <h3 className="banner-title">Home Decor</h3>
                                                    <a href="/shop/sidebar/list" className="btn btn-outline-gray banner-link">Discover Now<i className="icon-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6 col-sm-6">
                                            <div className="banner banner-4 banner-overlay banner-overlay-light lazy-media">
                                                <div className="lazy-overlay"></div>

                                                <LazyLoadImage
                                                    alt="banner"
                                                    src="images/home/banners/banner-4.jpg"
                                                    threshold={ 200 }
                                                    width="100%"
                                                    height="auto"
                                                    effect="blur"
                                                />

                                                <div className="banner-content banner-content-top">
                                                    <h4 className="banner-subtitle">On Sale</h4>
                                                    <h3 className="banner-title">Collection Chairs</h3>
                                                    <div className="banner-text">up to 30% off</div>
                                                    <a href="/shop/sidebar/list" className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3"></div>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <SpecialCollection products={ products } loading={ loading } />                
                </Reveal>

                <div className="bg-light deal-container pt-5 pb-3 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="deal">
                                    <div className="deal-content">
                                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                            <>
                                                <h4>Limited Quantities</h4>
                                                <h2>Deal of the Day</h2>

                                                <h3 className="product-title">
                                                    <a href="/">POÄNG</a>
                                                </h3>

                                                <div className="product-price">
                                                    <span className="new-price">$149.00</span>
                                                    <span className="old-price">Was $240.00</span>
                                                </div>

                                                <div className="deal-countdown">
                                                    <Countdown date={ `2022-02-01T01:02:03` } renderer={ rendererThree } />
                                                </div>

                                                <a href="/shop/sidebar/list" className="btn btn-primary">
                                                    <span>Shop Now</span><i className="icon-long-arrow-right"></i>
                                                </a>
                                            </>
                                        </Reveal>
                                    </div>

                                    <div className="deal-image position-relative">
                                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                                            <a href="/shop/sidebar/list">
                                                <div className="lazy-overlay bg-white"></div>

                                                <LazyLoadImage
                                                    alt="deal-banner"
                                                    src="https://res.cloudinary.com/ds6eldued/image/upload/v1667903405/products/deal-1_lscxyt.png"
                                                    threshold="300"
                                                    effect="blur"
                                                    width="100%"
                                                    height={ 560 }
                                                />
                                            </a>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="banner banner-overlay banner-overlay-light d-none d-lg-block h-100 pb-2">
                                    <a href="/" className="h-100">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="deal-banner"
                                            src="https://res.cloudinary.com/ds6eldued/image/upload/v1667907052/banners/banner-onsale_axqedw.jpg"
                                            threshold="300"
                                            effect="blur"
                                            className="h-100"
                                            width="100%"
                                            height={ 610 }
                                        />
                                    </a>

                                    <div className="banner-content banner-content-top">
                                        <h4 className="banner-subtitle text-white">The Best Choice</h4>
                                        <h3 className="banner-title text-white">Indigo <br />Best Linen</h3>
                                        <div className="banner-text text-primary">$49.99</div>
                                        <a href="/shop/sidebar/3cols" className="btn btn-outline-light banner-link">Shop Now<i className="icon-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6"></div>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <TopCollection products={ topProducts } loading={ loading } />
                </Reveal>

                <BlogCollection posts={ posts } loading={ loading }></BlogCollection>

                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div className="icon-boxes-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon text-dark">
                                            <i className="icon-rocket"></i>
                                        </span>
                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Free Shipping</h3>

                                            <p>orders $50 or more</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon text-dark">
                                            <i className="icon-rotate-left"></i>
                                        </span>

                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Free Returns</h3>

                                            <p>within 30 days</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon text-dark">
                                            <i className="icon-info-circle"></i>
                                        </span>

                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Get 20% Off 1 Item</h3>

                                            <p>When you sign up</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon text-dark">
                                            <i className="icon-life-ring"></i>
                                        </span>

                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">We Support</h3>

                                            <p>24/7 amazing services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <div
                        className="footer-newsletter bg-image"
                        style={ { backgroundImage: 'url(images/backgrounds/bg-2.jpg)' } }
                    >
                        <div className="container">
                            <div className="heading text-center">
                                <h3 className="title">Get The Latest Deals</h3>

                                <p className="title-desc">
                                    and receive&nbsp;
                                <span>$20 coupon</span> for first shopping
                            </p>
                            </div>

                            <div className="row">
                                <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                    <form action="#">
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your Email Address"
                                                aria-label="Email Adress"
                                                aria-describedby="newsletter-btn"
                                                required
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn btn-primary"
                                                    type="submit"
                                                    id="newsletter-btn"
                                                >
                                                    <span>Subscribe</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <NewsletterModal />
            </div>
        </>
    )
}

export default Home;