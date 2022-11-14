import Breadcrumb from '../../partials/product/breadcrumb';
import GalleryDefault from '../../partials/product/gallery/gallery-default';
import DetailOne from '../../partials/product/details/detail-one';
import InfoOne from '../../partials/product/info-tabs/info-one';
import RelatedProductsOne from '../../partials/product/related/related-one';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, clearErrors } from '../../actions/productActions';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    
    const { loading, error, product } = useSelector(state => state.productDetails);

    // console.log("***************** Related products: " + JSON.stringify(product.relatedProducts))


    const prev = product.product;
    const next = product.product;

    useEffect(() => {
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProductDetails(id));        

    }, [dispatch, alert, error, id]);

    

    return (
        <div className="main">
            <Breadcrumb prev={ prev } next={ next } current="Default" />
            <div className="page-content">
                <div className="container skeleton-body">
                    <div className="product-details-top">
                        <div className={ `row skel-pro-single ${loading ? '' : 'loaded'}` }>
                            <div className="col-md-6">
                                <div className="skel-product-gallery"></div>
                                {
                                    !loading ?
                                        <GalleryDefault product={ product.product } />
                                        : ""
                                }
                            </div>

                            <div className="col-md-6">
                                <div className="entry-summary row">
                                    <div className="col-md-12">
                                        <div className="entry-summary1 mt-2 mt-md-0"></div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="entry-summary2"></div>
                                    </div>
                                </div>
                                {
                                    !loading ?
                                        <DetailOne product={ product.product } />
                                        : ""
                                }
                            </div>
                        </div>
                    </div>

                    {
                        loading ?
                            <div className="skel-pro-tabs"></div>
                            :
                            <InfoOne product={ product.product } />
                    }

                    <RelatedProductsOne products={ product.relatedProducts } loading={ loading } />
                </div >
            </div >
        </div >
    )
}

export default ProductDetails;
