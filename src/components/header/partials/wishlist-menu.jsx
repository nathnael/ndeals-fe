import React from 'react';

function WishlistMenu ( props ) {

    return (
        <div className="wishlist">
            <a href="/shop/wishlist" title="Wishlist">
                <div className="icon">
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count badge">5</span>
                </div>
                <p>Wishlist</p>
            </a>
        </div>
    );
}


export default WishlistMenu;