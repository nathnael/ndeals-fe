import { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';

import Breadcrumb from '../../partials/product/breadcrumb';
import GalleryDefault from '../../partials/product/gallery/gallery-default';
import DetailOne from '../../partials/product/details/detail-one';
import InfoOne from '../../partials/product/info-tabs/info-one';
import RelatedProductsOne from '../../partials/product/related/related-one';
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions as productDetailAction } from '../../store/productDetails';




function ProductDetails(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    // const [idParam, setIDParam] = useState();
    // setIDParam(id);
    
    // const { loading, error, productDetails } = useSelector(state => state.productList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const product = props.productDetails.productDetails ? props.productDetails.productDetails.productDetails : {};
    const relatedProducts = props.productDetails.productDetails ? props.productDetails.productDetails.relatedProducts : [];

    const prev = product;
    const next = product;

    useEffect(() => {
        if(props.error) {
            alert.error(props.error);
            props.clearErrors();
        }
        props.productDetailsRequest(id);           
    }, []);

    

    return (
        <div className="main">
            <Breadcrumb prev={ prev } next={ next } current="Default" />
            <div className="page-content">
                <div className="container skeleton-body">
                    <div className="product-details-top">
                        <div className={ `row skel-pro-single ${props.loading ? '' : 'loaded'}` }>
                            <div className="col-md-6">
                                <div className="skel-product-gallery"></div>
                                {
                                    !props.loading ?
                                        <GalleryDefault product={ product } />
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
                                    !props.loading ?
                                        <DetailOne product={ product } />
                                        : ""
                                }
                            </div>
                        </div>
                    </div>

                    {
                        props.loading ?
                            <div className="skel-pro-tabs"></div>
                            :
                            <InfoOne product={ product } />
                    }

                    <RelatedProductsOne products={ relatedProducts } loading={ props.loading } />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        productDetails: state.productDetails.productDetails,
    };
}

export default connect(mapStateToProps, {...productDetailAction})(ProductDetails);
