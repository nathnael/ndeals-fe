import React, { useState, useEffect } from 'react';

function Pagination ( props ) {
    const { perPage, total } = props;
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ lastPage, setLastPage ] = useState( 1 );
    const [ pageNumbers, setPageNumbers ] = useState( [] );

    useEffect( () => {
        setCurrentPage( 1 );
    }, [] )

    useEffect( () => {
        setLastPage( parseInt( total / perPage ) + ( total % perPage ? 1 : 0 ) );
    }, [ total, perPage ] )

    useEffect( () => {
        let tempArray = [];
        let pageCount = Math.floor( total / perPage ) + ( 0 < total % perPage ? 1 : 0 );

        for ( let i = -1; i < 2 && pageCount >= 3; i++ ) {
            if ( 1 < currentPage && currentPage < pageCount )
                tempArray.push( currentPage + i );
            if ( 1 === currentPage )
                tempArray.push( currentPage + i + 1 );
            if ( currentPage === pageCount )
                tempArray.push( currentPage + i - 1 );
        }

        for ( let i = 0; i < pageCount && pageCount < 3; i++ ) {
            tempArray.push( i + 1 );
        }

        setPageNumbers( tempArray );
    }, [ total, perPage, currentPage ] )

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className={ `page-item ${currentPage < 2 ? 'disabled' : ''}` }>
                    <a className="page-link page-link-prev" href="/" scroll={ "false" }>
                        <span aria-hidden="true">
                            <i className="icon-long-arrow-left"></i>
                        </span>Prev
                    </a>
                </li>

                {
                    pageNumbers.length ?
                        pageNumbers.map( ( page, index ) => (
                            <li className={ `page-item ${currentPage == page ? 'active' : ''}` } key={ index }>
                                <a
                                    className="page-link"
                                    href="/"
                                    scroll={ "false" }
                                >{ page }</a>
                            </li>
                        ) )
                        : ""
                }
                {
                    lastPage > 3 ?
                        <li className="page-item-total">of { lastPage }</li>
                        : ""

                }

                <li className={ `page-item ${currentPage == lastPage ? 'disabled' : ''}` }>
                    <a className="page-link page-link-next" href="/" scroll={ "false" }>
                        Next
                        <span aria-hidden="true">
                            <i className="icon-long-arrow-right"></i>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;