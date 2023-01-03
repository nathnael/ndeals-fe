import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation, useNavigate } from 'react-router-dom';
import { safeContent } from '../../../utils';

import { getProducts } from '../../../actions/productActions';

function HeaderSearch () {
    const pathname = useLocation();
    const [ cat, setCat ] = useState( "" );
    const [ searchTerm, setSearchTerm ] = useState( "" );
    const [ focusSearch, setFocusSearch ] = useState( false );
    const [ searchProducts, setSearchProducts ] = useState( [] );
    // const [ searchProducts, { data } ] = useLazyQuery( GET_PRODUCTS );
    // const result = data && data.products.data;
    const [ timer, setTimer ] = useState( null );
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, products, error } = useSelector(state => state.products);
    let navigate = useNavigate();

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        dispatch(getProducts(1, 12, searchTerm));
        
    }, [dispatch, error, alert, searchTerm]);

    useEffect( () => {
        document.querySelector( "body" ).addEventListener( 'click', closeSearchForm );

        return ( () => {
            document.querySelector( "body" ).removeEventListener( 'click', closeSearchForm );
        } )
    }, [] );

    useEffect( () => {
        if ( products && searchTerm.length > 2 )
            setSearchProducts( products.reduce( ( acc, product ) => {
                let max = 0;
                let min = 999999;
                product.variants.map( item => {
                    if ( min > item.price ) min = item.price;
                    if ( max < item.price ) max = item.price;
                }, [] );

                // console.log(`${product.name} - Min: ${min}`);
                // console.log(`${product.name} - Max: ${max}`);

                if ( product.variants.length == 0 ) {
                    min = product.sale_price
                        ? product.sale_price
                        : product.price;
                    max = product.price;
                }

                return [
                    ...acc,
                    {
                        ...product,
                        minPrice: min,
                        maxPrice: max
                    }
                ];
            }, [] ) )
    }, [ products, searchTerm ] )

    // useEffect( () => {
    //     if ( searchTerm.length > 2 ) {
    //         if ( timer ) clearTimeout( timer );
    //         let timerId = setTimeout( () => {
    //             searchProducts( {
    //                 variables: {
    //                     searchTerm: searchTerm,
    //                     category: cat
    //                 }
    //             } );
    //         }, 500 );
    //         setTimer( timerId );
    //     }
    // }, [ searchProducts, searchTerm, cat, timer ] );

    useEffect( () => {
        document.querySelector( '.header-search.show-results' ) && document.querySelector( '.header-search.show-results' ).classList.remove( 'show-results' );
    }, [ pathname ] );

    function matchEmphasize ( name ) {
        let regExp = new RegExp( searchTerm, "i" );
        return name.replace(
            regExp,
            ( match ) => "<strong>" + match + "</strong>"
        );
    }

    function closeSearchForm ( e ) {
        if ( !e.target.closest( '.header-search' ) ) {
            document
                .querySelector( '.header .search-toggle' )
                .classList.remove( 'active' );
            document
                .querySelector( '.header .header-search-wrapper' )
                .classList.remove( 'show' );
        }
    }

    function onCatSelect ( e ) {
        setCat( e.target.value );
    }

    function onSearchChange ( e ) {
        setSearchTerm( e.target.value );
    }

    function onSearchToggle ( e ) {
        e.stopPropagation();
        document
            .querySelector( '.header .search-toggle' )
            .classList.toggle( 'active' );
        document
            .querySelector( '.header .header-search-wrapper' )
            .classList.toggle( 'show' );
    }

    function showSearchForm ( e ) {
        e.stopPropagation();
        document
            .querySelector( '.header .header-search' )
            .classList.add( 'show' );
    }

    function onSubmitSearchForm ( e ) {
        e.preventDefault();
        navigate('/shop', {search: `?searchTerm=${searchTerm}&category=${cat}`});
    }

    function goProductPage () {
        setSearchTerm( '' );
        setSearchProducts( [] );
    }

    function onFocusSearch() {
        setFocusSearch(true);
    }

    function onBlurSearch() {
        setFocusSearch(false);
    }

    return (
        <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
            <button className="search-toggle"><i className="icon-search"></i></button>

            <form action="#" method="get" onSubmit={ onSubmitSearchForm } onClick={ showSearchForm }>
                <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only" value={ searchTerm }
                        required>Search</label>
                    <input type="text" onChange={ onSearchChange } onFocus={onFocusSearch} onBlur={onBlurSearch} value={ searchTerm } className="form-control" name="q" placeholder="Search product ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    <div id="search-results" className="live-search-list" onClick={ goProductPage }>
                        {
                            ( focusSearch && products && products.length > 0 && searchTerm.length > 2 ) ?
                                <div className="autocomplete-suggestions">
                                    {
                                        searchTerm.length > 2 && products.map( ( product, index ) => (
                                            <a href={ `/product/${product._id}` } className="autocomplete-suggestion" key={ `search-result-${index}` }>
                                                <LazyLoadImage src={ product.sm_pictures[ 0 ].url } width={ 40 } height={ 40 } alt="product" />
                                                <div className="search-name" dangerouslySetInnerHTML={ safeContent( matchEmphasize( product.name ) ) }></div>
                                                <span className="search-price">
                                                    {
                                                        product.stock == 0 ?
                                                            <div className="product-price mb-0">
                                                                <span className="out-price">${ product.price && product.price.toFixed( 2 ) }</span>
                                                            </div>
                                                            :
                                                            product.minPrice == product.maxPrice ?
                                                                <div className="product-price mb-0">${ product.minPrice && product.minPrice.toFixed( 2 ) }</div>
                                                                :
                                                                product.variants.length == 0 ?
                                                                    <div className="product-price mb-0">
                                                                        <span className="new-price">${ product.minPrice && product.minPrice.toFixed( 2 ) }</span>
                                                                        <span className="old-price">${ product.maxPrice && product.maxPrice.toFixed( 2 ) }</span>
                                                                    </div>
                                                                    :
                                                                    <div className="product-price mb-0">${ product.minPrice && product.minPrice.toFixed( 2 ) }&ndash;${ product.maxPrice && product.maxPrice.toFixed( 2 ) }</div>
                                                    }
                                                </span>
                                            </a>
                                        ) )
                                    }
                                </div>
                                : ""
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}

export default HeaderSearch;