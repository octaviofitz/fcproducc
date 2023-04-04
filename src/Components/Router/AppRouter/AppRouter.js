import {Routes, BrowserRouter, Route} from 'react-router-dom'

/* Componentes */
import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import Banner from '../../Banner/Banner';
import Carreras from '../../Carreras/Carreras';
import Patrocinios from '../../Patrocinios/Patrocinios';

/* Css */

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>

            <Header />
            <Navbar />
            <Banner />

            <Routes >

            <Route path='/' element={<Carreras />} />
            <Route path='/' element={<Patrocinios />} />
            
            </Routes>

            <Footer />

            </ BrowserRouter>
        </div>
    );
};

export default AppRouter;