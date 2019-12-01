import React from 'react';
import './App.css';
import Header from './Components/header';
import SearchBox from './Components/search-box';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <SearchBox />
      </div>
    </div>
  );
}

export default App;
