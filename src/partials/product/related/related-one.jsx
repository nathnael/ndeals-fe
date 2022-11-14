import React from 'react';
import ProductSix from '../../../features/products/product-six';
import OwlCarousel from '../../../features/owl-carousel';

import { mainSlider8 } from '../../../utils/data';

function RelatedProductsOne ( props ) {
    const { products } = props;

    return (
        <>
            <h2 className="title text-center mb-4">You May Also Like</h2>

            {
                products ?
                props.loading ?
                    <OwlCarousel slidesPerView={4} spaceBetween={30} navigate={true}>
                        {
                            [ 1, 2, 3, 4 ].map( ( item, index ) =>
                                <div className="skel-pro" key={ index }></div>
                            )
                        }
                    </OwlCarousel>
                    :
                    <OwlCarousel slidesPerView={4} spaceBetween={30} navigate={true}>
                        {
                            products.map( ( product, index ) =>
                                <ProductSix product={ product } key={ index } />
                            )
                        }
                    </OwlCarousel>
                : ""
            }
        </>
    );
}

export default React.memo( RelatedProductsOne );