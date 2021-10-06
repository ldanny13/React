import React from 'react';
// import logo from './logo.svg';
import './css/index.css';
import CardsUsers from './components/CardsUsers';
import Header from './components/Header';
import Footer from './components/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';



// import Error from './components/Error'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container"> 
      <CardsUsers/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
