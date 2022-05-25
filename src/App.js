import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import Googlelogin from './AuthComponent/Googlelogin';
import NotFound from './NotFound';
import GuideBook from './GuideBook';
import Logout from './AuthComponent/Logout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/AuthComponent/Googlelogin" element={<Googlelogin/>}></Route>
          <Route path="/GuideBook" element={<GuideBook/>}></Route>
          <Route path="/AuthComponent/Logout" element={<Logout/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>


  );
}

export default App;
