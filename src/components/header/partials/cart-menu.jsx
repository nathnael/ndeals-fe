import { cartQtyTotal, cartPriceTotal } from '../../../utils/index';
import { cartList } from '../../../utils/data';

function CartMenu ( props ) {
    // const cartList = [
    //     {
    //         name: "FlashDisk",
    //         slug: "FlashDisk",
    //         qty: 1,
    //         price: 3.12,
    //         sale_price: 4.50,
    //         sm_pictures: [{
    //             public_id : "products/macbook_o2cj2k",
    //             url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_7_2_300x300_6e6c2d02d3_fulnmm.jpg"
    //         }],
    //         sum: 0.00
    //     },
    //     {
    //         name: "Laptop",
    //         slug: "laptop",
    //         qty: 1,
    //         price: 3.12,
    //         sale_price: 4.50,
    //         sm_pictures: [{
    //             public_id : "products/camera_ridc0i",
    //             url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_4_2_300x300_ec63a5f054_pinofq.jpg"
    //         }],
    //         sum: 0.00
    //     },
    //     {
    //         name: "Monitor",
    //         slug: "monitor",
    //         qty: 1,
    //         price: 3.12,
    //         sale_price: 4.50,
    //         sm_pictures: [{
    //             public_id : "products/eahhtj1bkn1k9gjgd3hn",
    //             url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_2_2_300x300_798eabaee1_qbmhpo.jpg"
    //         }],
    //         sum: 0.00
    //     }
    // ];

    return (
        <div className="dropdown cart-dropdown">
            <a href="/account/cart" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <div className="icon">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">{ cartQtyTotal( cartList ) }</span>
                </div>
                <p>Cart</p>
            </a>

            <div className={ `dropdown-menu dropdown-menu-right ${cartList.length === 0 ? 'text-center' : ''}` } >
                {
                    0 === cartList.length ?
                        <p>No products in the cart.</p> :
                        <>
                            <div className="dropdown-cart-products">
                                { cartList.map( ( item, index ) => (
                                    <div className="product justify-content-between" key={ index }>
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href={ `/product/default/${item.slug}` }>{ item.name }</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">{ item.qty } </span>
                                                 x ${ item.sale_price ? item.sale_price.toFixed( 2 ) : item.price.toFixed( 2 ) }
                                            </span>
                                        </div>

                                        <figure className="product-image-container ml-2">
                                            <a href={ `/product/default/${item.slug}` } className="product-image">
                                                <img src={ item.sm_pictures[ 0 ].url } alt="product" />
                                            </a>
                                        </figure>
                                        <button className="btn-remove" title="Remove Product" onClick={ () => props.removeFromCart( item ) }><i className="icon-close"></i></button>
                                    </div>
                                ) ) }
                            </div>
                            <div className="dropdown-cart-total">
                                <span>Total</span>

                                <span className="cart-total-price">${ cartPriceTotal( cartList ).toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                            </div>

                            <div className="dropdown-cart-action">
                                <a href="/shop/cart" className="btn btn-primary">View Cart</a>
                                <a href="/shop/checkout" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}


export default CartMenu;