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
import '../AppRouter/appRouter.css'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>

            <Navbar />
{/*             <Header />
 */}            
            <div className='main'>
            <Banner />
            <Routes >
           
            <Route path='/' element={<Carreras />} />
            <Route path='/' element={<Patrocinios />} />
            
            </Routes>
            </div>
            <Footer />

            </ BrowserRouter>
        </div>
    );
};

export default AppRouter;