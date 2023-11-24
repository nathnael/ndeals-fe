import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation, useNavigate, useRouteMatch } from 'react-router-dom';

import { actions as wishlistAction } from '../../store/wishlist';
import { actions as cartAction } from '../../store/cart';
import { actions as compareAction } from '../../store/compare';
import { actions as demoAction } from '../../store/demo';

import { isInWishlist, isInCompare } from '../../utils';

function ProductEleven ( props ) {
    const navigate = useNavigate();
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

        if ( product.variants.length === 0 ) {
            min = product.sale_price
                ? product.sale_price
                : product.price;
            max = product.price;
        }

        setMinPrice( min );
        setMaxPrice( max );
    }, [product, minPrice, maxPrice] )

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
            navigate( '/account/wishlist' );
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
        <div className="product product-7 text-center w-100">
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

                <a href={ `/product/${product._id}` }>
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
                                <a href="/" className="btn-product-icon btn-wishlist btn-expandable" onClick={ onWishlistClick }><span>add to wishlist</span></a>
                            }
                            <a href="/" className="btn-product-icon btn-quickview" title="Quick View" onClick={ onQuickView }><span>quick view</span></a>
                            <a href="/" className="btn-product-icon btn-compare" onClick={ onCompareClick }><span>compare</span></a>
                        </div>
                        :
                        <div className="product-action-vertical">
                            {
                                <a href="/" className="btn-product-icon btn-wishlist btn-expandable" onClick={ onWishlistClick }><span>add to wishlist</span></a>

                            }
                            <a href="/" className="btn-product-icon btn-quickview" title="Quick View" onClick={ onQuickView }><span>quick view</span></a>
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
                <div className="product-cat">
                    {
                        product.category.map( ( item, index ) => (
                            <React.Fragment key={ item.slug + '-' + index }>
                                <a href={ { pathname: '/shop/sidebar/list', query: { category: item.slug } } }>
                                    { item.name }
                                </a>
                                { index < product.category.length - 1 ? ', ' : "" }
                            </React.Fragment>
                        ) )
                    }
                </div>

                <h3 className="product-title">
                    <a href={ `/product/default/${product.slug}` }>{ product.name }</a>
                </h3>

                {
                    !product.stock || product.stock === 0 ?
                        <div className="product-price">
                            <span className="out-price">${ product.price.toFixed( 2 ) }</span>
                        </div>
                        :
                        minPrice === maxPrice ?
                            <div className="product-price">${ minPrice.toFixed( 2 ) }</div>
                            :
                            product.variants.length === 0 ?
                                <div className="product-price">
                                    <span className="new-price">${ minPrice.toFixed( 2 ) }</span>
                                    <span className="old-price">${ maxPrice.toFixed( 2 ) }</span>
                                </div>
                                :
                                <div className="product-price">${ minPrice.toFixed( 2 ) }&ndash;${ maxPrice.toFixed( 2 ) }</div>
                }

                <div className="ratings-container">
                    <div className="ratings">
                        <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                        <span className="tooltip-text">{ product.ratings.toFixed( 2 ) }</span>
                    </div>
                    <span className="ratings-text">( { product.review } Reviews )</span>
                </div>

                {
                    product.variants.length > 0 ?
                        <div className="product-nav product-nav-dots">
                            <div className="row no-gutters">
                                {
                                    product.variants.map( ( item, index ) => (
                                        <a href="/" style={ { backgroundColor: item.color } } key={ index }><span className="sr-only">Color Name</span></a>
                                    ) )
                                }
                            </div>
                        </div>
                        : ""
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

export default connect( mapStateToProps, { ...wishlistAction, ...cartAction, ...compareAction, ...demoAction } )( ProductEleven );