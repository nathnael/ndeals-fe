import React, { useEffect, useState } from 'react';

function HeaderSearch () {
    const [ cat, setCat ] = useState( "" );
    const [ searchTerm, setSearchTerm ] = useState( "" );
    const [ products, setProducts ] = useState( [] );
    const [ timer, setTimer ] = useState( null );

    useEffect( () => {
        document.querySelector( "body" ).addEventListener( 'click', closeSearchForm );

        return ( () => {
            document.querySelector( "body" ).removeEventListener( 'click', closeSearchForm );
        } )
    }, [] );


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

    function goProductPage () {
        setSearchTerm( '' );
        setProducts( [] );
    }

    return (
        <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
            <button className="search-toggle"><i className="icon-search"></i></button>

            <form action="#" method="get" onSubmit={ () => true } onClick={ showSearchForm }>
                <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only" value={ searchTerm }
                        required>Search</label>
                    
                    <input type="text" onChange={ onSearchChange } value={ searchTerm } className="form-control" name="q" placeholder="Search product ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    <div className="live-search-list" onClick={ goProductPage }>
                        {
                            ( products.length > 0 && searchTerm.length > 2 ) ?
                                <div className="autocomplete-suggestions">
                                    {
                                        searchTerm.length > 2 && products.map( ( product, index ) => (
                                            <a href={ `/product/default/${product.slug}` } className="autocomplete-suggestion" key={ `search-result-${index}` }>
                                                
                                                <div className="search-name"></div>
                                                <span className="search-price">
                                                    {
                                                        product.stock == 0 ?
                                                            <div className="product-price mb-0">
                                                                <span className="out-price">${ product.price.toFixed( 2 ) }</span>
                                                            </div>
                                                            :
                                                            product.minPrice == product.maxPrice ?
                                                                <div className="product-price mb-0">${ product.minPrice.toFixed( 2 ) }</div>
                                                                :
                                                                product.variants.length == 0 ?
                                                                    <div className="product-price mb-0">
                                                                        <span className="new-price">${ product.minPrice.toFixed( 2 ) }</span>
                                                                        <span className="old-price">${ product.maxPrice.toFixed( 2 ) }</span>
                                                                    </div>
                                                                    :
                                                                    <div className="product-price mb-0">${ product.minPrice.toFixed( 2 ) }&ndash;${ product.maxPrice.toFixed( 2 ) }</div>
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