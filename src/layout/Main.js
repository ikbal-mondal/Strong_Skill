import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../componenets/Header/Header';

import { Outlet } from 'react-router-dom';
const Main = () => {
    return (

        <div>
          <Navbar></Navbar>
           <Header></Header>,
          <Outlet></Outlet>
        </div>
    );
};

export default Main;