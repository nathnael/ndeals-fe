import React from 'react';

function Breadcrumb ( props ) {
    const { prev, next, current, fullWidth = false } = props;


    return (
        <nav className="breadcrumb-nav border-0 mb-0">
            <div className={ 'd-flex align-items-center ' + ( fullWidth ? 'container-fluid' : 'container' ) }>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/product/default/dark-yellow-lace-cut-out-swing-dress">Product</a>
                    </li>
                    <li className="breadcrumb-item active">{ current }</li>
                </ol>

                <nav className="product-pager ml-auto">
                    {
                        prev ?
                            <a
                                href="/"
                                className={ `product-pager-link product-pager-prev ${!next ? 'prev-only' : ''}` }
                            >
                                <i className="icon-angle-left"></i>
                                <span>Prev</span>
                                <div className="product-detail">
                                    <figure>
                                        <img
                                            src={ prev.sm_pictures && prev.sm_pictures[ 0 ].url }
                                            alt="product"
                                            width={ prev.sm_pictures && prev.sm_pictures[ 0 ].width }
                                            height={ prev.sm_pictures && prev.sm_pictures[ 0 ].height }
                                        />
                                    </figure>
                                    <h3 className="product-name mb-0">{ prev.name }</h3>
                                </div>
                            </a>
                            : ""
                    }

                    {
                        next ?
                            <a
                                href="/"
                                className="product-pager-link product-pager-next"
                            >
                                <span>Next</span>
                                <i className="icon-angle-right"></i>
                                <div className="product-detail">
                                    <figure>
                                        <img
                                            src={ next.sm_pictures && next.sm_pictures[ 0 ].url }
                                            alt="product"
                                            width={ next.sm_pictures && next.sm_pictures[ 0 ].width }
                                            height={ next.sm_pictures && next.sm_pictures[ 0 ].height }
                                        />
                                    </figure>
                                    <h3 className="product-name mb-0">{ next.name }</h3>
                                </div>
                            </a>
                            : ""
                    }

                </nav >
            </div >
        </nav >
    )
}

export default React.memo( Breadcrumb );