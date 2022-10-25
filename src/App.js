import { BrowserRouter as Router, Route } from 'react-router-dom';

import './Assets/css/bootstrap.min.css';
import './Assets/css/fonts-molla.min.css';
import './Assets/vendor/line-awesome/css/line-awesome.min.css';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <Router>      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost:400,500,600,700,800,900" />
      <div className="page-wrapper">
        <Header />
        <Home />
        {/* { <Route path="/" component={Home} exact /> } */}
      </div>
    </Router>
  );
}

export default App;
