import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rooms from './components/Rooms';
import Bookings from './components/Bookings';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Rooms/>}/>  
      <Route path="/rooms" element={<Rooms/>}/>  
      <Route path="/bookings" element={<Bookings/>}>
        <Route path=":roomId" element={<Bookings/>}></Route>
      </Route>  
    </Routes> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
