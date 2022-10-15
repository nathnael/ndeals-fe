import "./Assets/scss/style.scss";
import Header from './components/header/header';

function App() {
  return (
    <>      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost:400,500,600,700,800,900" />
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="css/fonts-molla.min.css" />
      <link rel="stylesheet" type="text/css" href="vendor/line-awesome/css/line-awesome.min.css" />
      <div className="page-wrapper">
        <Header />  
      </div>
    </>
  );
}

export default App;
