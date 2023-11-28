import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './component/header';
import Banner from './component/banner';
import TrendingCollection from './component/trendingCollection';


function App() {
  return (
    <div className="content-wrapper">
     <Header/>
     <main>
      <TrendingCollection/>
      <Banner/>
      </main>
    </div>
  );
}

export default App;
