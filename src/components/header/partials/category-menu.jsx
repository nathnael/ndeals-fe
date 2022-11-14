function CategoryMenu () {

    return (
        <div className="dropdown category-dropdown">
            <a href="/shop/sidebar/list" className="dropdown-toggle" title="Browse Categories">
                Browse Categories
            </a>

            {/* <div className="dropdown-menu show"> */}
            <div className="dropdown-menu">
                <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                        <li className='active'><a href="/shop/sidebar/3cols?category=electronics" scroll={ "false" }>Electronics</a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=gift-idea" scroll={ "false" }>Gift Ideas</a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=beds" scroll={ "false" }>Beds</a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=lighting" scroll={ "false" }>Lighting</a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=sofas-and-sleeper-sofas" scroll={ "false" }>Sofas & Sleeper sofas</a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=storage" scroll={ "false" }>Storage</a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=armchairs-and-chaises" scroll={ "false" }>Armchairs & Chaises</a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=decoration" scroll={ "false" }>Decoration </a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=kitchen-cabinets" scroll={ "false" }>Kitchen Cabinets</a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=coffee-and-tables" scroll={ "false" }>Coffee & Tables</a></li>
                        <li className=''><a href="/shop/sidebar/3cols?category=furniture" scroll={ "false" }>Outdoor Furniture </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CategoryMenu; 