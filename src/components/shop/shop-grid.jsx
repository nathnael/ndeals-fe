import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StickyBox from 'react-sticky-box';
import { useAlert } from 'react-alert';


import PageHeader from '../../features/page-header';
import ShopListOne from '../../partials/shop/list/shop-list-one';
import Pagination from '../../features/pagination';
import ShopSidebarOne from '../../partials/shop/sidebar/shop-sidebar-one';
import { getProducts } from '../../actions/productActions';

import { scrollToPageContent } from '../../utils';

function ShopGrid() {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, products, error } = useSelector(state => state.products);
    const [ firstLoading, setFirstLoading ] = useState( false );
    const [ perPage, setPerPage ] = useState( 5 );
    const [ pageTitle, setPageTitle ] = useState( 'NDeals' );
    const [ toggle, setToggle ] = useState( false );
    const [ type, setType ] = useState( "4col" );
    const totalCount = products.productsCount;

    useEffect(() => {
        if(error) {
            return alert.error(error);
        }

        dispatch(getProducts());        

    }, [dispatch, alert, error]);

    useEffect( () => {
        window.addEventListener( "resize", resizeHandle );
        resizeHandle();
        return () => {
            window.removeEventListener( "resize", resizeHandle );
        }
    }, [] )

    function resizeHandle() {
        if ( document.querySelector( "body" ).offsetWidth < 992 )
            setToggle( true );
        else
            setToggle( false );
    }

    useEffect( () => {
        if ( type == 'list' ) {
            setPageTitle( 'NDeals' );
            setPerPage( 5 );
        } else if ( type == '2cols' ) {
            setPageTitle( 'Grid 2 Columns' );
            setPerPage( 6 );
        } else if ( type == '3cols' ) {
            setPageTitle( 'Grid 3 Columns' );
            setPerPage( 9 );
        } else if ( type == '4cols' ) {
            setPageTitle( 'Grid 4 Columns' );
            setPerPage( 12 );
        }
    }, [ type ] )

    useEffect( () => {
        if ( products ) setFirstLoading( true );
    }, [ products ] )

    
    function toggleSidebar() {
        if (
            document
                .querySelector( 'body' )
                .classList.contains( 'sidebar-filter-active' )
        ) {
            document
                .querySelector( 'body' )
                .classList.remove( 'sidebar-filter-active' );
        } else {
            document
                .querySelector( 'body' )
                .classList.add( 'sidebar-filter-active' );
        }
    }

    function hideSidebar() {
        document
            .querySelector( 'body' )
            .classList.remove( 'sidebar-filter-active' );
    }

    if ( error ) {
        return <div></div>
    }

    return (
        <main className="main shop">
            <PageHeader title={ pageTitle } subTitle="Shop" />
            <nav className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/shop/sidebar/list">Shop</a>
                        </li>
                        <li className="breadcrumb-item active">{ pageTitle }</li>
                        {
                            ""
                        }
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row skeleton-body">
                        <div
                            className={ `col-lg-9 skel-shop-products ${ !loading ? 'loaded' : '' }` }
                        >
                            <div className="toolbox">
                                <div className="toolbox-left">
                                    {
                                        !loading && products ?
                                            <div className="toolbox-info">
                                                Showing
                                                <span> { products.length } of { totalCount }</span> Products
                                            </div>
                                            : ""
                                    }
                                </div>

                                <div className="toolbox-right">
                                    <div className="toolbox-sort">
                                        <label htmlFor="sortby">Sort by:</label>
                                        <div className="select-custom">
                                            <select
                                                name="sortby"
                                                id="sortby"
                                                className="form-control"
                                                onChange={ () => {} }
                                                value={ 'default' }
                                            >
                                                <option value="default">Default</option>
                                                <option value="featured">Most Popular</option>
                                                <option value="rating">Most Rated</option>
                                                <option value="new">Date</option>
                                            </select>
                                        </div>
                                    </div>                                    
                                </div>
                            </div >

                            <ShopListOne products={ products } perPage={ perPage } loading={ loading }></ShopListOne>

                            {
                                totalCount > perPage ?
                                    <Pagination perPage={ perPage } total={ totalCount }></Pagination>
                                    : ""
                            }
                        </div >

                        <aside className={ `col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${ ( !loading || firstLoading ) ? 'loaded' : '' }` }>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <StickyBox className="sticky-content" offsetTop={ 70 }>
                                <ShopSidebarOne toggle={ toggle }></ShopSidebarOne>
                            </StickyBox>
                            {
                                toggle ?
                                    <button className="sidebar-fixed-toggler" onClick={ toggleSidebar }>
                                        <i className="icon-cog"></i>
                                    </button>
                                    : ''
                            }
                            <div className="sidebar-filter-overlay" onClick={ hideSidebar }></div>
                        </aside >
                    </div >
                </div >
            </div >
        </main >
    )
}

export default ShopGrid;