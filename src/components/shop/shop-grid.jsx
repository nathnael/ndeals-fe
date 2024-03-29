import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import StickyBox from 'react-sticky-box';
import { useAlert } from 'react-alert';
import { useLocation } from 'react-router-dom';

import PageHeader from '../../features/page-header';
import ShopListOne from '../../partials/shop/list/shop-list-one';
import Pagination from '../../features/pagination';
import ShopSidebarOne from '../../partials/shop/sidebar/shop-sidebar-one';
// import { 
//     getProducts, 
//     getUniqueBrands, 
//     getUniqueCategories, 
//     getUniqueColors, 
//     getUniqueSizes,
//     getPriceRange
// } from '../../actions/productActions';
import { actions as productsAction } from '../../store/product';
import { useSearchParams } from 'react-router-dom';


import { scrollToPageContent } from '../../utils';

function ShopGrid(props) {
    const dispatch = useDispatch();
    const alert = useAlert();
    // let { loading, products, error, productsCount } = useSelector(state => state.productList.products);
    // // products = products.products ? products.products : [];
    // const { categories } = useSelector(state => state.productList.uniqueCategories.uniqueCategories);
    // const { sizes } = useSelector(state => state.productList.uniqueSizes.uniqueSizes);
    // const { colors } = useSelector(state => state.productList.uniqueColors.uniqueColors);
    // const { brands } = useSelector(state => state.productList.uniqueBrands.uniqueBrands);
    // const { minPrice, maxPrice } = useSelector(state => state.productList.priceRange.priceRange);
    const [ firstLoading, setFirstLoading ] = useState( false );
    const [ page, setPage ] = useState( 1 );
    const [ perPage, setPerPage ] = useState( 12 );
    const [ pageTitle, setPageTitle ] = useState( 'NDeals' );
    const [ toggle, setToggle ] = useState( false );
    const [ type, setType ] = useState( "4col" );
    const totalCount = props.productsCount;
    const pathname = useLocation();
    const [searchParams] = useSearchParams();
    
    // const router = useRouter();
    // const page = 1;
    const searchTerm = searchParams.get('searchTerm');
    // const category = searchParams.get('category');

    const [ priceRange, setRange ] = useState( { min: 0, max: 1000 } );
    const [ categoryState, setCategoryState ] = useState('');
    const [ sizeState, setSizeState ] = useState([]);
    const [ colorState, setColorState ] = useState([]);
    const [ brandState, setBrandState ] = useState([]);

    // console.log(`Categories: ${JSON.stringify(categories)}`);

    useEffect(() => {
        if(props.error) {
            return alert.error(props.error);
        }
        
        // props.getProductsRequest(page, perPage, searchTerm, priceRange, categoryState, sizeState, colorState, brandState)

        // props.uniqueCategoriesRequest()

        // props.uniqueSizesRequest()

        // props.uniqueColorsRequest()

        // props.uniqueBrandsRequest()

        // props.priceRangeRequest()

        // initPriceRange();

    }, [props, page, perPage, alert, searchTerm, priceRange, categoryState, sizeState, colorState, brandState]);

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

    // useEffect(() => {
    //     setRange({ min: minPrice, max: maxPrice })
    // }, [minPrice, maxPrice])

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
        if ( props.products ) setFirstLoading( true );
    }, [ props.products ] )

    
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

    function onSizeClick(size) {
        if (sizeState.includes(size))
            setSizeState(sizeState.map(s => s !== size));
        else
            setSizeState([...sizeState, size]);
    }

    const handlePerPageChange = e => {
        setPerPage(e.target.value);
        setPage(1);
    };

    function clearFilter() {
        setRange({ min: props.priceRange.minPrice, max: props.priceRange.maxPrice });
        setCategoryState('');
        setSizeState([]);
        setColorState([]);
        setBrandState([]);
    }

    if ( props.error ) {
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
                            searchTerm ?
                                <li className="breadcrumb-item">
                                    <span>Search - { searchTerm }</span>
                                </li>
                                : ""
                        }
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row skeleton-body">
                        <div
                            className={ `col-lg-9 skel-shop-products ${ !props.loading ? 'loaded' : '' }` }
                        >
                            <div className="toolbox">
                                <div className="toolbox-left">
                                    {
                                        !props.loading && props.products ?
                                            <div className="toolbox-sort">
                                                <span className='mr-2'>Showing</span>
                                                <div className="select-custom mr-2">
                                                    <select 
                                                        name="perPage"
                                                        id="perPage"
                                                        className="form-control form-control-sm"
                                                        value={perPage} 
                                                        onChange={handlePerPageChange}
                                                    >
                                                        {[12, 20, 60, 120].map(option => (
                                                            <option key={option} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <span className='mr-2'> of { totalCount }</span> Products
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
                            </div>

                            <ShopListOne products={ props.products } perPage={ perPage } loading={ props.loading }></ShopListOne>

                            {
                                totalCount > perPage ?
                                    <Pagination page={page} setPage={setPage} perPage={ perPage } total={ totalCount } pathname={pathname}></Pagination>
                                    : ""
                            }
                        </div>

                        <aside className={ `col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${ ( !props.loading || firstLoading ) ? 'loaded' : '' }` }>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <StickyBox className="sticky-content" offsetTop={ 70 }>
                                <ShopSidebarOne toggle={ toggle } priceRange={priceRange} setRange={setRange} categoryState={categoryState} setCategoryState={setCategoryState} categories={props.categories} sizeState={sizeState} sizes={props.sizes} setSizeState={setSizeState} clearFilter={clearFilter} colors={props.colors} colorState={colorState} setColorState={setColorState} brands={props.brands} brandState={brandState} setBrandState={setBrandState} minPrice={props.minPrice} maxPrice={props.maxPrice}></ShopSidebarOne>
                            </StickyBox>
                            {
                                toggle ?
                                    <button className="sidebar-fixed-toggler" onClick={ toggleSidebar }>
                                        <i className="icon-cog"></i>
                                    </button>
                                    : ''
                            }
                            <div className="sidebar-filter-overlay" onClick={ hideSidebar }></div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productList.products.products,
        productsCount: state.productList.products.productsCount,
        categories: state.productList.uniqueCategories.uniqueCategories.categories,
        sizes: state.productList.uniqueSizes.uniqueSizes.sizes,
        colors: state.productList.uniqueColors.uniqueColors.colors,
        brands: state.productList.uniqueBrands.uniqueBrands.brands,
        priceRange: state.productList.priceRange.priceRange,
        loading: state.productList.products.loading,
        error: state.productList.products.error
    };
};

export default connect(mapStateToProps, {...productsAction})(ShopGrid);
