import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Assets/css/bootstrap.min.css';
import './Assets/css/fonts-molla.min.css';
import './Assets/vendor/line-awesome/css/line-awesome.min.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import MetaData from './components/layout/MetaData';
import ProductDetails from './components/product/product-details';

function App() {
  return (  
    <>        
      <MetaData title={'Buy Best Products Online'} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost:400,500,600,700,800,900" />
      <div className="page-wrapper">      
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/product/:id" element={<ProductDetails />} exact />
          </Routes>
        </BrowserRouter>
        <Footer />   
      </div>
    </>    
  );
}

export default App;
