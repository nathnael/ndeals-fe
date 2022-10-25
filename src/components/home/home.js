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
                <OwlCarousel adClass="owl-simple intro-slider" options={ introSlider }>
                    <div className="intro-slide" style={ { backgroundColor: '#EDF2F0', backgroundImage: 'url(images/home/sliders/slide-1.png)' } }>
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
                    <div className="intro-slide" style={ { backgroundImage: 'url(images/home/sliders/slide-2.jpg)' } }>
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
                                                    className="font-weight-light line-through"
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

                    <div className="intro-slide" style={ { backgroundColor: '#EDF2F0', backgroundImage: 'url(images/home/sliders/slide-3.jpg)' } }>
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
                                                    className="font-weight-light line-through"
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

            <div className="mb-4"></div>

        </div>
    )
}

export default Home;