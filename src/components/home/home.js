import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '../../features/owl-carousel';
// import DealCollection from '~/components/partials/home/deal-collection';
// import ElectronicsCollection from '~/components/partials/home/electronics-collection';
// import FurnitureCollection from '~/components/partials/home/furniture-collection';
// import ClothingCollection from '~/components/partials/home/clothing-collection';
// import BlogCollection from '~/components/partials/home/blog-collection';
// import NewsletterModal from "~/components/features/modals/newsletter-modal";

import { 
    homeData, 
    introSlider, 
    brandSlider, 
    fadeInLeft, 
    fadeInRight, 
    fadeInUp, 
    fadeInRightShorter, 
    fadeInLeftShorter, 
    fadeInUpShorter, 
    fadeIn 
} from '../../utils/data';

function Home() {     

    return (
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
        </div>
    )
}

export default Home;