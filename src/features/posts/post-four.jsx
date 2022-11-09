import { LazyLoadImage } from 'react-lazy-load-image-component';

function PostFour ( props ) {
    const { post } = props;

    let date = new Date( post.date );
    let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

    return (
        <article className="entry">
            <figure className="entry-media" style={ { paddingTop: `${post.image[ 0 ].height / post.image[ 0 ].width * 100}%` } }>
                <a href={ `/blog/single/default/${post.slug}` }>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="Post"
                        src={ post.image[ 0 ].url }
                        threshold={ 500 }
                        effect="blur"
                        height="auto"
                    />
                </a>
            </figure>
            <div className="entry-body">
                <div className="entry-meta">
                    <a href="#">{ date.toLocaleDateString( 'en-US', options ) }</a>
                    <span className="meta-separator">|</span>
                    <a href="#">{ post.comments } Comments</a>
                </div>

                <h2 className="entry-title">
                    <a href={ `/blog/single/default/${post.slug}` }>
                        { post.title }
                    </a>
                </h2>

                <div className="entry-content">
                    <a href={ `/blog/single/default/${post.slug}` } className="read-more">Continue Reading</a>
                </div>
            </div>
        </article>
    );
}

export default PostFour;