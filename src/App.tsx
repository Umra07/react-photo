import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Search from './components/UI/Search';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

function App() {


  return (
    <div className="App">
      <Header />
      <Search />
      <p className="descr">
        This site was created for you to manage and find the desired photo uploaded by people at the
        highest price and lowest price
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="*" element={<h1>Buy</h1>} />
      </Routes>
    </div>
  );
}

export default App;
