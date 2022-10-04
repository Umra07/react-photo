import React from 'react';
import './App.scss';
import Ad from './components/Ad';
import Header from './components/Header';
import Search from './components/UI/Search';
import Gallery from './components/Gallery';
import UsersList from './components/UsersList';

function App() {


  return (
    <div className="App">
      <Header />
      <Search />
      <p className="descr">
        This site was created for you to manage and find the desired photo uploaded by people at the
        highest price and lowest price
      </p>
      <Gallery />
      <Ad />
      <UsersList />
    </div>
  );
}

export default App;
