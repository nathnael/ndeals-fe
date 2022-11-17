import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '../../features/owl-carousel';

function PostOne ( props ) {
    const { post, adClass = "", isContent = true, isAuthor = true } = props;
    const openVideoModal = ( e ) => {
        e.preventDefault();
        props.showVideo();
    }

    let date = new Date( post.date );
    let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

    return (
        <article className={ `entry ${adClass}` }>
            {
                post.image.length <= 1 ?
                    <figure className={ `entry-media ${post.type == 'video' ? 'entry-video' : ''}` } style={ { paddingTop: `${post.image[ 0 ].height / post.image[ 0 ].width * 100}%` } }>
                        {
                            post.type !== 'video' ?
                                <a href={ `/blog/${post._id}` }>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="Post"
                                        src={ post.image[ 0 ].url }
                                        threshold={ 500 }
                                        effect="blur"
                                        height="auto"
                                        width="100%"
                                    />
                                </a>
                                :
                                <>
                                    <a href={ `/blog/${post._id}` }>
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="Post"
                                            src={ post.image[ 0 ].url }
                                            threshold={ 500 }
                                            effect="blur"
                                            height="auto"
                                            width="100%"
                                        />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
                                        onClick={ openVideoModal }
                                        className="btn-video btn-iframe"
                                    ><i className="icon-play"></i></a>
                                </>
                        }
                    </figure>
                    :
                    <figure className="entry-media" style={ { paddingTop: `${post.image[ 0 ].height / post.image[ 0 ].width * 100}%` } }>
                        <OwlCarousel adClass="owl-simple owl-light owl-nav-inside cols-1" options={ { dots: false, nav: true, responsive: { 992: { nav: true } } } }>
                            {
                                post.image.map( ( item, index ) =>
                                    <a href={ `/blog/${post._id}` } key={ index }>
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="Post"
                                            src={ `${item.url}` }
                                            threshold={ 500 }
                                            effect="blur"
                                        />
                                    </a>
                                )
                            }
                        </OwlCarousel>
                    </figure>
            }
            <div className="entry-body">
                <div className="entry-meta">
                    {
                        isAuthor ?
                            <>
                                <span className="entry-author">
                                    by <a href={ `/blog/${post._id}` }>{ post.author }</a>
                                </span>
                                <span className="meta-separator">|</span>
                            </>
                            : ""
                    }
                    <a href={ `/blog/${post._id}` }>{ date.toLocaleDateString( 'en-US', options ) }</a>
                    <span className="meta-separator">|</span>
                    <a href={ `/blog/${post._id}` }>{ post.comments } Comments</a>
                </div>

                <h2 className="entry-title">
                    <a href={ `/blog/${post._id}` }>
                        { post.title }
                    </a>
                </h2>

                <div className="entry-cats">
                    in&nbsp;
                    {
                        post.blog_categories.map( ( cat, index ) => (
                            <span key={ index }>
                                <a href={ { pathname: '/blog/classic', query: { category: cat.slug } } }>{ cat.name }</a>
                                { index < post.blog_categories.length - 1 ? ', ' : '' }
                            </span>
                        ) )
                    }
                </div>
                {
                    isContent ?
                        <div className="entry-content">
                            <p>{ post.content }</p>
                            <a href={ `/blog/${post._id}` } className="read-more">Continue Reading</a>
                        </div>
                        : ""
                }
            </div>
        </article >
    );
}

export default PostOne;