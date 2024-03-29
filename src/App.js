import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-image-lightbox/style.css';
import 'react-toastify/dist/ReactToastify.min.css';

import './Assets/css/bootstrap.min.css';
import './Assets/css/fonts-molla.min.css';
import './Assets/vendor/line-awesome/css/line-awesome.min.css';
import About from './components/about/about';
import Cart from './components/account/cart';
import Checkout from './components/account/checkout';
import Dashboard from './components/account/dashboard';
import Login from './components/account/login';
import Wishlist from './components/account/wishlist';
import Blog from './components/blog/blog';
import SingleBlog from './components/blog/singleBlog';
import Contact from './components/contact/contact';
import FAQ from './components/faqs/faq';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import MetaData from './components/layout/MetaData';
import ProductDetails from './components/product/product-details';
import ShopGrid from './components/shop/shop-grid';
import { actions as userActions } from './store/user';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function App(props) {

  useEffect(() => {
    props.getLoadUserRequest();
  }, [])

  return (  
    <>        
      <MetaData title={'Buy Best Products Online'} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost:400,500,600,700,800,900" />
      <div className="page-wrapper">            
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/shop" element={<ShopGrid />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/faqs" element={<FAQ />} />            
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/account/login" element={<Login />} />
            <Route path="/account/dashboard" element={<Dashboard />} />
            <Route path="/account/wishlist" element={<Wishlist />} />
            <Route path="/account/cart" element={<Cart />} />
            <Route path="/account/checkout" element={<Checkout />} />
          </Routes>
          <Footer />  
        </BrowserRouter>
      </div>
      <ToastContainer
          autoClose={ 3000 }
          duration={ 300 }
          newestOnTo={ true }
          className="toast-container"
          position="top-right"
          closeButton={ false }
          hideProgressBar={ true }
          newestOnTop={ true }
          draggable={ false }
      />
    </>    
  );
}

const mapStateToProps = (state) => {
  console.log(JSON.stringify(state.user));
  return {
    user: state.user.user ? state.user.user.user : undefined,
    error: state.user.error ? state.user.error : undefined,
  };
}

export default connect(mapStateToProps, {...userActions})(App);
