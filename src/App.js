import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CardImages from './components/CardImages.js';
import About from './components/About.js';
import DataSafety from './components/DataSafety.js';
import RatingAndReviews from './components/RatingAndReviews.js';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <CardImages /> */}
      <About />
      <DataSafety />
      <RatingAndReviews />
    </div>
  );
}

export default App;
