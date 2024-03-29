import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

import OwlCarousel from '../../features/owl-carousel';
import ProductTwelve from '../../features/products/product-twelve';

import { attrFilter } from '../../utils';

function SpecialCollection ( props ) {
    const { products = [], loading } = props;

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" >
            <div className="container">
                <TabList className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3">
                    <Tab className="nav-item">
                        <span className="nav-link">Featured</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">On Sale</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Top Rated</span>
                    </Tab>
                </TabList>
            </div>

            <div className="container-fluid">
                <TabPanel>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2" slidesPerView={5} spaceBetween={30} navigate={true}>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2" slidesPerView={5} spaceBetween={30} navigate={true}>
                                {
                                    attrFilter( products, 'all' ).map( ( item, index ) =>
                                        <ProductTwelve
                                            product={ item }
                                            key={ index } />
                                    )
                                }
                            </OwlCarousel>
                    }
                </TabPanel>

                <TabPanel>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2" slidesPerView={5} spaceBetween={30} navigate={true}>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2" slidesPerView={5} spaceBetween={30} navigate={true}>
                                {
                                    attrFilter( products, 'all' ).map( ( item, index ) =>
                                        <ProductTwelve
                                            product={ item }
                                            key={ index } />
                                    )
                                }
                            </OwlCarousel>
                    }
                </TabPanel>

                <TabPanel>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2" slidesPerView={5} spaceBetween={30} navigate={true}>
                                {
                                    [ 1, 2, 3, 4, 5, 6 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2" slidesPerView={5} spaceBetween={30} navigate={true}>
                                {
                                    attrFilter( products, 'rated' ).map( ( item, index ) =>
                                        <ProductTwelve
                                            product={ item }
                                            key={ index } />
                                    )
                                }
                            </OwlCarousel>
                    }
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default SpecialCollection;
