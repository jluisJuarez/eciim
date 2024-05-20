import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/style.css'; 
import Header from './Components/header';
import Portada from './Components/portada';
import Info from './Components/info';
import Footer from './Components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Portada />

    <Info />
    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

