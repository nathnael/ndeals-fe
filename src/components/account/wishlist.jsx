import React, { useState, useEffect } from 'react';

import PageHeader from '../../features/page-header';


function Wishlist ( props ) {
    const [ wishItems, setWishItems ] = useState( [] );


    function moveToCart ( product ) {
        props.removeFromWishlist( product );
        props.addToCart( product );
    }

    return (
        <main className="main">
            <PageHeader
                title="Wishlist"
                subTitle="Shop"
            />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/shop/sidebar/list">Account</a>
                        </li>
                        <li className="breadcrumb-item active">Wishlist</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content pb-5">
                {
                    wishItems.length > 0 ?
                        <div
                            className="container"
                        >
                            <table className="table table-wishlist table-mobile">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Stock Status</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        wishItems.map( ( product, index ) => (
                                            <tr
                                                key={ index }
                                            >
                                                <td className="product-col">
                                                    <div className="product">
                                                        <figure className="product-media">
                                                            <a href={ `/product/default/${product.slug}` } className="product-image">
                                                                <img src={ process.env.NEXT_PUBLIC_ASSET_URI + product.sm_pictures[ 0 ].url } alt="product" />
                                                            </a>
                                                        </figure>

                                                        <h4 className="product-title">
                                                            <a href={ `/product/default/${product.slug}` }>{ product.name }</a>
                                                        </h4>
                                                    </div>
                                                </td>
                                                <td className="price-col">
                                                    {
                                                        product.stock == 0 ?
                                                            <div className="product-price d-inline-block mb-0">
                                                                <span className="out-price">${ product.price.toFixed( 2 ) }</span>
                                                            </div>
                                                            :
                                                            product.minPrice == product.maxPrice ?
                                                                <div className="product-price d-inline-block mb-0">${ product.minPrice.toFixed( 2 ) }</div>
                                                                :
                                                                product.variants.length == 0 ?
                                                                    <div className="product-price d-inline-block mb-0">
                                                                        <span className="new-price">${ product.minPrice.toFixed( 2 ) }</span>
                                                                        <span className="old-price">${ product.maxPrice.toFixed( 2 ) }</span>
                                                                    </div>
                                                                    :
                                                                    <div className="product-price d-inline-block mb-0">${ product.minPrice.toFixed( 2 ) }&ndash;${ product.maxPrice.toFixed( 2 ) }</div>
                                                    }
                                                </td>
                                                <td className="stock-col">
                                                    <span className={ `${product.stock == 0 ? 'out-of-stock' : 'in-stock'}` } >{ product.stock == 0 ? 'Out of stock' : 'In stock' }</span>
                                                </td>
                                                <td className="action-col">
                                                    <div className="dropdown">
                                                        {
                                                            ( product.variants.length > 0 || product.stock == 0 ) ?
                                                                <a href={ `/product/default/${product.slug}` } className="btn btn-block btn-outline-primary-2 btn-select">
                                                                    <i className="icon-list-alt"></i>
                                                                    { product.stock == '0' ? 'read more' : 'select' }
                                                                </a>
                                                                :
                                                                <button className="btn btn-block btn-outline-primary-2" onClick={ e => moveToCart( product ) }>
                                                                    <i className="icon-cart-plus"></i>
                                                                    add to cart
                                                                </button>
                                                        }
                                                    </div>
                                                </td>
                                                <td className="remove-col">
                                                    <button
                                                        className="btn-remove"
                                                        onClick={ e => props.removeFromWishlist( product ) }
                                                    >
                                                        <i className="icon-close"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ) )
                                    }
                                </tbody>
                            </table>

                            <div className="wishlist-share">
                                <div className="social-icons social-icons-sm mb-2">
                                    <label className="social-label">Share on:</label>
                                    <a
                                        href="#"
                                        className="social-icon"
                                        title="Facebook"
                                    >
                                        <i className="icon-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="social-icon"
                                        title="Twitter"
                                    >
                                        <i className="icon-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="social-icon"
                                        title="Instagram"
                                    >
                                        <i className="icon-instagram"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="social-icon"
                                        title="Youtube"
                                    >
                                        <i className="icon-youtube"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="social-icon"
                                        title="Pinterest"
                                    >
                                        <i className="icon-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        :
                        <div
                            className="container"
                        >
                            <div className="text-center">
                                <i className="icon-heart-o wishlist-empty d-block" style={ { fontSize: '15rem', lineHeight: '1' } }></i>
                                <span className="d-block mt-2">No products added to wishlist</span>
                                <a
                                    href="/shop/sidebar/list"
                                    className="btn btn-primary mt-2"
                                >Go Shop</a>
                            </div>
                        </div>
                }

            </div>
        </main>
    )
}

export default Wishlist;