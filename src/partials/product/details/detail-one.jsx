import { useEffect, useState, useRef } from 'react';
import SlideToggle from 'react-slide-toggle';

import Qty from '../../../features/qty';


import { canAddToCart, isInWishlist } from '../../../utils';

function DetailOne ( props ) {
    const ref = useRef( null );
    const { product } = props;
    const [ qty, setQty ] = useState( 1 );
    const [ qty2, setQty2 ] = useState( 1 );
    const [ colorArray, setColorArray ] = useState( [] );
    const [ sizeArray, setSizeArray ] = useState( [] );
    const [ variationGroup, setVariationGroup ] = useState( [] );
    const [ selectedVariant, setSelectedVariant ] = useState( { color: null, colorName: null, price: null, size: "" } );
    const [ showClear, setShowClear ] = useState( false );
    const [ showVariationPrice, setShowVariationPrice ] = useState( false );
    const [ maxPrice, setMaxPrice ] = useState( 0 );
    const [ minPrice, setMinPrice ] = useState( 99999 );


    if ( !product ) {
        return <div></div>;
    }

    return (
        <div className="product-details" ref={ ref }>
            <h1 className="product-title">{ product.name }</h1>

            <div className="ratings-container">
                <div className="ratings">
                    <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                    <span className="tooltip-text">{ product.ratings && product.ratings.toFixed( 2 ) }</span>
                </div>
                <span className="ratings-text">( { product.review } Reviews )</span>
            </div>

            {
                product.stock == 0 ?
                    <div className="product-price">
                        <span className="out-price">
                            {
                                minPrice == maxPrice ?
                                    <span>${ product.price.toFixed( 2 ) }</span>
                                    :
                                    <span>${ minPrice && minPrice.toFixed( 2 ) }&ndash;${ maxPrice && maxPrice.toFixed( 2 ) }</span>
                            }
                        </span>
                    </div>
                    :
                    minPrice == maxPrice ?
                        <div className="product-price">${ minPrice && minPrice.toFixed( 2 ) }</div>
                        :
                        product.variants && product.variants.length == 0 ?
                            <div className="product-price">
                                <span className="new-price">${ minPrice && minPrice.toFixed( 2 ) }</span>
                                <span className="old-price">${ maxPrice && maxPrice.toFixed( 2 ) }</span>
                            </div>
                            :
                            <div className="product-price">${ minPrice && minPrice.toFixed( 2 ) }&ndash;${ maxPrice && maxPrice.toFixed( 2 ) }</div>
            }

            <div className="product-content">
                <p>{ product.short_desc }</p>
            </div>

            {
                product.variants && product.variants.length > 0 ?
                    <>
                        <div className="details-filter-row details-row-size">
                            <label>Color:</label>

                            <div className="product-nav product-nav-dots">
                                {
                                    product.variants.map( ( item, index ) => (
                                        <a
                                            href="/"
                                            className={ `${( item.color == selectedVariant.color ? 'active ' : '' ) + ( item.disabled ? 'disabled' : '' )}` }
                                            style={ { backgroundColor: item.color } }
                                            key={ index }
                                            onClick={ e => {} }
                                        ></a>
                                    ) )
                                }
                            </div>
                        </div>

                        <div className="details-filter-row details-row-size">
                            <label htmlFor="size">Size:</label>
                            <div className="select-custom">
                                <select
                                    name="size"
                                    className="form-control"
                                    value={ selectedVariant.size }
                                    onChange={ () => {} }
                                >
                                    <option value="">Select a size</option>
                                    {
                                        sizeArray.map( ( item, index ) => (
                                            <option
                                                value={ item.size }
                                                key={ index }
                                            >{ item.size }</option>
                                        ) )
                                    }
                                </select>
                            </div>

                            <a href="#" className="size-guide mr-4">
                                <i className="icon-th-list"></i>size guide
                            </a>
                            {
                                showClear ?
                                    <a href="#" onClick={ () => {} }>clear</a>
                                    : ""
                            }
                        </div >
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div>
                                    <button className={ `d-none variation-toggle ${toggleState.toLowerCase()}` } onClick={ onToggle }></button>
                                    <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                        <div className="product-price">
                                            ${ selectedVariant.price ? selectedVariant.price.toFixed( 2 ) : 0 }
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </SlideToggle>
                    </>
                    : ""
            }

            <div className="details-filter-row details-row-size">
                <label htmlFor="qty">Qty:</label>
                <Qty changeQty={ () => {} } max={ product.stock } value={ qty }></Qty>
            </div >

            <div className="product-details-action">
                <a
                    href="#"
                    className={ `btn-product btn-cart` }
                    onClick={ e => {} }
                >
                    <span>add to cart</span>
                </a>
                <div className="details-action-wrapper">
                    {
                        <a href="#" className="btn-product btn-wishlist" onClick={ () => {} }><span>Add to Wishlist</span></a>

                    }
                </div>
            </div >

            <div className="product-details-footer">
                <div className="product-cat w-100 text-truncate">
                    <span>Category:</span>
                    {
                        product.category && product.category.map( ( cat, index ) => (
                            <span key={ index }>
                                <a
                                    href={ { pathname: '/shop/sidebar/list', query: { category: cat.slug } } }
                                >{ cat.name }</a>
                                { index < product.category.length - 1 ? ',' : '' }
                            </span>
                        ) )
                    }
                </div >

                <div className="social-icons social-icons-sm">
                    <span className="social-label">Share:</span>
                    <a href="#" className="social-icon" title="Facebook">
                        <i className="icon-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon" title="Twitter">
                        <i className="icon-twitter"></i>
                    </a>
                    <a href="#" className="social-icon" title="Instagram">
                        <i className="icon-instagram"></i>
                    </a>
                    <a href="#" className="social-icon" title="Pinterest">
                        <i className="icon-pinterest"></i>
                    </a>
                </div>
            </div >
            <div className="sticky-bar d-none">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <figure className="product-media">
                                <a href={ `/product/default/${product.slug}` }>
                                    <img src={ product.sm_pictures && product.sm_pictures[ 0 ].url } alt="product" width={ product.sm_pictures && product.sm_pictures[ 0 ].width } height={ product.sm_pictures && product.sm_pictures[ 0 ].height } />
                                </a>
                            </figure>
                            <h3 className="product-title">
                                <a href={ `/product/default/${product.slug}` }>{ product.name }</a>
                            </h3>
                        </div>
                        <div className="col-6 justify-content-end">
                            {
                                <div className="product-price">
                                    <span className="out-price">${ product.price && product.price.toFixed( 2 ) }</span>
                                </div>
                            }
                            <Qty changeQty={ () => {} } max={ product.stock } value={ qty2 }></Qty>
                            <div className="product-details-action">
                                <a
                                    href="#"
                                    className={ `btn-product btn-cart` }
                                    onClick={ e => {} }
                                >
                                    <span>add to cart</span>
                                </a>
                                {
                                    <a href="#" className="btn-product btn-wishlist" onClick={() => {} }><span>Add to Wishlist</span></a>

                                }
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}


export default DetailOne;
