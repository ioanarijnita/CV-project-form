import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { RouteHeaderItem } from './Components/routeHeader';

function App() {

  return (
    <div style = {{flex: 1}} >
        <Header></Header>
        <RouteHeaderItem></RouteHeaderItem>
        <Footer></Footer>
        
  </div>
  );
}

export default App;
