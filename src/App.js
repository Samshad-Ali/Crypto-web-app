import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import Coin from "./components/Coin";
import Exchange from "./components/Exchange";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";



const App=()=> {
  return (
    
       <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/exchange" element={<Exchange/>} />
          <Route path="/coin/:id" element={<CoinDetails/>} />

      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;


'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'