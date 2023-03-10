import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Headers from '../components/Headers/Headers';

const Main = () => {
    return (
        <div>
            <Headers/>
            <br/>
            <br/>
            <br/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;