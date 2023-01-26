import { useLocation } from 'react-router-dom';

import { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/router';

function StickyHeader( props ) {
    const { top = 210 } = props;
    // const router = useRouter();
    const ref = useRef( null );
    const [ height, setHeight ] = useState( 'auto' );
    const path = useLocation().pathname;



    useEffect( () => {
        // router.events.on( 'hashChangeComplete', initSticky );
        scrollHandler();
        window.addEventListener( 'scroll', scrollHandler, {
            passive: true
        } );

        window.addEventListener( 'resize', resizeHandler, {
            passive: true
        } );

        return () => {
            window.removeEventListener( 'scroll', scrollHandler );
            window.removeEventListener( 'resize', resizeHandler );
        }
    }, [] )

    function scrollHandler() {
        let stickyContent = ref.current.children[ 0 ];
        if ( window.pageYOffset > top ) {
            stickyContent.classList.remove('d-none');
            if ( !stickyContent.classList.contains( 'fixed' ) ) {
                stickyContent.classList.add( 'fixed' );
                stickyContent
                    .querySelector( '.category-dropdown .dropdown-menu' )
                    .classList.remove( 'show' );
            }
        } else if ( stickyContent.classList.contains( 'fixed' ) ) {
            stickyContent.classList.remove('d-none');
            stickyContent.classList.remove( 'fixed' );
            if ( path.pathname == '/' ) {
                stickyContent
                    .querySelector( '.category-dropdown .dropdown-menu' )
                    .classList.add( 'show' );
            }
        } else {
            stickyContent.classList.add('d-none');
            setHeight( stickyContent.offsetHeight + 'px' );
        }
    }

    function resizeHandler() {
        let stickyContent = ref.current.children[ 0 ];
        setHeight( stickyContent.offsetHeight + 'px' );
        scrollHandler();
    }

    return (
        <div ref={ ref } className="sticky-wrapper" style={ { height: height } }>
            { props.children }
        </div>
    );
}

export default StickyHeader;