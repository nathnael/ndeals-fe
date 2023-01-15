import React, { useState, useEffect } from 'react';
import InputRange from 'react-input-range';
import SlideToggle from 'react-slide-toggle';
import 'react-input-range/lib/css/index.css';

import { shopData } from '../../../utils/data';

function ShopSidebarOne ( props ) {
    const { 
        toggle = false, 
        priceRange, 
        setRange, 
        categoryState, 
        setCategoryState, 
        categories, 
        sizeState, 
        sizes, 
        setSizeState, 
        clearFilter, 
        colors, 
        colorState, 
        setColorState,
        brands,
        brandState,
        setBrandState,
        minPrice,
        maxPrice
    } = props;
    

    useEffect( () => {
        // setRange( { min: minPrice, max: maxPrice } );
    }, [minPrice, maxPrice] )

    function onChangePriceRange ( value ) {
        setRange( value );
    }

    function containsAttrInUrl ( type, value ) {
        const currentQueries = [];
        return currentQueries && currentQueries.includes( value );
    }    

    function isSizeSelected(size) {
        return sizeState.includes(size);
    }

    function isColorSelected(color) {
        return colorState.includes(color);
    }

    function isBrandSelected(brand) {
        return brandState.includes(brand);
    }

    function getUrlForAttrs ( type, value ) {
        let currentQueries = [];
        currentQueries = containsAttrInUrl( type, value ) ? currentQueries.filter( item => item !== value ) : [ ...currentQueries, value ];

        return {
            pathname: "",
            query: {
                page: 1,
                [ type ]: currentQueries.join( ',' )
            }
        }
    }

    function updateSizeState(size) {
        if(sizeState.includes(size)){
            const newSizeState = sizeState.filter((s) => s !== size);
            setSizeState( newSizeState);
        }            
        else {
            setSizeState(current => [...current, size]);
        }            
    }

    function updateCategoryState(e, category) {
        if (categoryState === category) {
            setCategoryState('');
            e.target.className = '';
        } else {
            setCategoryState(category);
        }
    }

    function updateColorState(color) {
        if(colorState.includes(color)){
            const newColorState = colorState.filter((c) => c !== color);
            setColorState( newColorState);
        }            
        else {
            setColorState(current => [...current, color]);
        }            
    }

    function updateBrandState(brand) {
        if(brandState.includes(brand)){
            const newBrandState = brandState.filter((s) => s !== brand);
            setBrandState( newBrandState);
        }
        else {
            setBrandState(current => [...current, brand]);
        }
    }


    return (
        <>
            <aside className={ `${toggle ? 'sidebar-filter' : 'sidebar'} sidebar-shop` }>
                <div className={ toggle ? 'sidebar-filter-wrapper' : '' }>
                    <div className="widget widget-clean">
                        <label>Filters:</label>
                        <a href="/" className="sidebar-filter-clear" onClick={(e) => { clearFilter(); e.preventDefault() }} scroll={ "false" }>Clean All</a>
                    </div>

                    {
                        categories ?
                            <SlideToggle collapsed={ false }>
                                { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title mb-2">
                                            <a href="#category" className={ `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}` } onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }>Category</a>
                                        </h3>

                                        <div ref={ setCollapsibleElement }>
                                            <div className="widget-body pt-0">
                                                <div className="filter-items filter-items-count">
                                                    {
                                                        categories.map( ( item, index ) =>
                                                            <div className="filter-item" key={ `cat_${index}` }>
                                                                <p className={ `${item.category === categoryState ? 'active' : ''}` } style={{ cursor: "pointer" }} scroll={ "false" } onClick={(e) => {e.preventDefault(); updateCategoryState(e, item.category);}}>{ item.category }</p>
                                                                <span className="item-count">{ item.count }</span>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) }
                            </SlideToggle> : ""
                    }

                    {
                        sizes ?
                        <SlideToggle collapsed={ false }>
                            {
                                ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title mb-2"><a href="#Size" className={ `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}` } onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }>Size</a></h3>
                                        <div ref={ setCollapsibleElement }>
                                            <div className="widget-body pt-0">
                                                <div className="filter-items">
                                                    {                                                        
                                                        sizes.map( ( item, index ) => (
                                                            <div className="filter-item" key={ index }>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox"
                                                                        className="custom-control-input"
                                                                        id={ `size-${index + 1}` }
                                                                        onChange={ () => updateSizeState(item.size) }
                                                                        checked={ isSizeSelected(item.size) }
                                                                    />
                                                                    <label className="custom-control-label" htmlFor={ `size-${index + 1}` }>{ item.size }</label>
                                                                </div>
                                                            </div>
                                                        ) )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </SlideToggle> : ""
                    }
                    { 
                        colors ?
                        <SlideToggle collapsed={ false }>
                            {
                                ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title mb-2"><a href="#color" className={ `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}` } onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }>Color</a></h3>
                                        <div ref={ setCollapsibleElement }>
                                            <div className="widget-body pt-0">
                                                <div className="filter-colors">
                                                    {
                                                        colors.map( ( item, index ) => (
                                                            <a href="/" onClick={ (e) => { updateColorState(item.color); e.preventDefault(); } } className={ isColorSelected( item.color ) ? 'selected' : '' } style={ { backgroundColor: item.color } } key={ index } scroll={ "false" }>
                                                                <span className="sr-only">Color Name</span>
                                                            </a>
                                                        ) )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </SlideToggle> : ""
                    }

                    {
                        brands ?
                        <SlideToggle collapsed={ false }>
                            {
                                ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title mb-2"><a href="#Brand" className={ `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}` } onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }>Brand</a></h3>
                                        <div ref={ setCollapsibleElement }>
                                            <div className="widget-body pt-0">
                                                <div className="filter-items">
                                                    {                                                        
                                                        shopData.brands.map( ( item, index ) => (
                                                            <div className="filter-item" key={ index }>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox"
                                                                        className="custom-control-input"
                                                                        id={ `brand-${index + 1}` }
                                                                        onChange={ () => updateBrandState(item.brand) }
                                                                        checked={ isBrandSelected(item.brand) }
                                                                    />
                                                                    <label className="custom-control-label" htmlFor={ `brand-${index + 1}` }>{ item.brand }</label>
                                                                </div>
                                                            </div>
                                                        ) )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </SlideToggle> : ""
                    }

                    <SlideToggle collapsed={ false }>
                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title mb-2">
                                    <a href="#price" className={ `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}` } onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }>Price</a>
                                </h3>

                                <div ref={ setCollapsibleElement }>
                                    <div className="widget-body pt-0">
                                        <div className="filter-price">
                                            <div className="filter-price-text d-flex justify-content-between">
                                                <span>
                                                    Price Range:&nbsp;
                                                    <span className="filter-price-range">${ minPrice } - ${ maxPrice }</span>
                                                </span>

                                                <a href="/" className="pr-2" scroll={ "false" }>Filter</a>
                                            </div>

                                            <div className="price-slider">
                                                <InputRange
                                                    formatLabel={ value => `$${value}` }
                                                    maxValue={ maxPrice }
                                                    minValue={ minPrice }
                                                    step={ 50 }
                                                    value={ { min: priceRange.min, max: priceRange.max } }
                                                    onChange={ onChangePriceRange }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </SlideToggle>
                </div>
            </aside>
        </>
    );
}

export default React.memo( ShopSidebarOne );