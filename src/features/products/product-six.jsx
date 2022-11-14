import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


import { isInWishlist, isInCompare } from '../../utils';

function ProductSix ( props ) {
    const { product, wishlist } = props;
    const [ maxPrice, setMaxPrice ] = useState( 0 );
    const [ minPrice, setMinPrice ] = useState( 99999 );

    useEffect( () => {
        let min = minPrice;
        let max = maxPrice;
        product.variants.map( item => {
            if ( min > item.price ) min = item.price;
            if ( max < item.price ) max = item.price;
        }, [] );

        if ( product.variants.length == 0 ) {
            min = product.sale_price
                ? product.sale_price
                : product.price;
            max = product.price;
        }

        setMinPrice( min );
        setMaxPrice( max );
    }, [] )

    function onCartClick ( e ) {
        e.preventDefault();
        props.addToCart( product );
    }

    function onWishlistClick ( e ) {
        e.preventDefault();
        if ( !isInWishlist( props.wishlist, product ) ) {
            props.addToWishlist( product );
        } else {
            // router.push( '/pages/wishlist' );
        }
    }

    function onCompareClick ( e ) {
        e.preventDefault();
        if ( !isInCompare( props.comparelist, product ) ) {
            props.addToCompare( product );
        }
    }

    function onQuickView ( e ) {
        e.preventDefault();
        props.showQuickView( product.slug );
    }

    return (
        <div className="product product-5 text-center">
            <figure className="product-media">
                {
                    product.new ?
                        <span className="product-label label-new">New</span>
                        : ""
                }

                {
                    product.sale_price ?
                        <span className="product-label label-sale">Sale</span>
                        : ""
                }

                {
                    product.top ?
                        <span className="product-label label-top">Top</span>
                        : ""
                }

                {
                    !product.stock || product.stock == 0 ?
                        <span className="product-label label-out">Out of Stock</span>
                        : ""
                }

                <a href={ `/product/default/${product.slug}` }>
                    <LazyLoadImage
                        alt="product"
                        src={ product.sm_pictures[ 0 ].url }
                        threshold={ 500 }
                        effect="black and white"
                        wrapperClassName="product-image"
                    />
                    {
                        product.sm_pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={ product.sm_pictures[ 1 ].url }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </a>

                {
                    product.stock > 0 ?
                        <div className="product-action-vertical">
                            {
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable" onClick={ onWishlistClick }><span>add to wishlist</span></a>
                            }
                            <a href="#" className="btn-product-icon btn-quickview" title="Quick View" onClick={ onQuickView }><span>quick view</span></a>
                            <a href="#" className="btn-product-icon btn-compare" onClick={ onCompareClick }><span>compare</span></a>
                        </div>
                        :
                        <div className="product-action-vertical">
                            {
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable" onClick={ onWishlistClick }><span>add to wishlist</span></a>
                            }
                            <a href="#" className="btn-product-icon btn-quickview" title="Quick View" onClick={ onQuickView }><span>quick view</span></a>
                            <a href="#" className="btn-product-icon btn-compare" onClick={ onCompareClick }><span>compare</span></a>
                        </div>
                }

                {
                    product.stock && product.stock !== 0 ?
                        <div className="product-action">
                            {
                                product.variants.length > 0 ?
                                    <a href={ `/product/default/${product.slug}` } className="btn-product btn-cart btn-select">
                                        <span>select options</span>
                                    </a>
                                    :
                                    <button className="btn-product btn-cart" onClick={ onCartClick }>
                                        <span>add to cart</span>
                                    </button>
                            }
                        </div>
                        : ""
                }

            </figure>

            <div className="product-body">
                <h3 className="product-title">
                    <a href={ `/product/default/${product.slug}` }>{ product.name }</a>
                </h3>

                {
                    !product.stock || product.stock == 0 ?
                        <div className="product-price">
                            <span className="out-price">${ product.price.toFixed( 2 ) }</span>
                        </div>
                        :
                        minPrice == maxPrice ?
                            <div className="product-price">${ minPrice.toFixed( 2 ) }</div>
                            :
                            product.variants.length == 0 ?
                                <div className="product-price">
                                    <span className="new-price">${ minPrice.toFixed( 2 ) }</span>
                                    <span className="old-price">${ maxPrice.toFixed( 2 ) }</span>
                                </div>
                                :
                                <div className="product-price">${ minPrice.toFixed( 2 ) }&ndash;${ maxPrice.toFixed( 2 ) }</div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.data,
        comparelist: state.comparelist.data
    }
}

export default ProductSix;
