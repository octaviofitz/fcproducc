import {Routes, BrowserRouter, Route} from 'react-router-dom'

/* Componentes */
import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Banner from '../../Banner/Banner';
import Carreras from '../../Carreras/Carreras';
import Patrocinios from '../../Patrocinios/Patrocinios';
import Nosotros from '../../Nosotros/Nosotros';
import NuestrasCarreras from '../../NuestrasCarreras/NuestrasCarreras';
import Galeria from '../../Galeria/Galeria';
import Contacto from '../../Contacto/Contacto';
import M42 from '../../M42/Index/M42';
import ElDesafio from '../../ElDesafio/Index/ElDesafio';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import ImagenesM42 from '../../M42/Imagenes/ImagenesM42';
import ImagenesElDesafio from '../../ElDesafio/Imagenes/ImagenesElDesafio';
import BotonWP from '../../BotonWP/BotonWP';
import ResultadosM42 from '../../M42/Resultados/ResultadosM42';
import ResultadosDesafio from '../../ElDesafio/Resultados/ResultadosDesafio';
import AlojamientosM42 from '../../M42/AlojamientosM42/AlojamientosM42';
import AlojamientosDesafio from '../../ElDesafio/Alojamientos/AlojamientosDesafio';

/* Css */
import '../AppRouter/appRouter.css'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Banner / >
            <div className='main'>
           
            <BotonWP />
            <Routes >
           
            <Route path='/' element={<Carreras />} />
            <Route path='/' element={<Patrocinios />} />
            <Route path='/el-desafio' element={<ElDesafio />} />
            <Route path='/el-desafio/fotos2022' element={<ImagenesElDesafio />} />
            <Route path='/el-desafio/resultados' element={<ResultadosDesafio />} />
            <Route path='/el-desafio/alojamientos' element={<AlojamientosDesafio />} />
            <Route path='/m42' element={<M42 />} />
            <Route path='/m42/fotos2022' element={<ImagenesM42 />} />
            <Route path='/m42/resultados' element={<ResultadosM42 />} />
            <Route path='/m42/alojamientos' element={<AlojamientosM42 />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/carreras' element={<NuestrasCarreras />} />
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/contacto' element={<Contacto />} />

            
            </Routes>
            </div>
            <Footer />

            </ BrowserRouter>
        </div>
    );
};

export default AppRouter;