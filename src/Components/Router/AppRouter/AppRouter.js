import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

/* Componentes */

import Navbar from '../../Navbar/Navbar';
import Banner from '../../Banner/Banner';
import BannerDesktop from '../../BannerDesktop/BannerDesktop';
import Nosotros from '../../Secciones/Nosotros/Nosotros';
import Galeria from '../../Secciones/Galeria/Galeria';
import Contacto from '../../Secciones/Contacto/Contacto';
import M42 from '../../Carreras/M42/Index/M42';
import ElDesafio from '../../Carreras/ElDesafio/Index/ElDesafio';
import ScrollToTop from '../../Utilidades/ScrollToTop/ScrollToTop';
import ImagenesM42 from '../../Carreras/M42/Imagenes/ImagenesM42';
import ImagenesElDesafio from '../../Carreras/ElDesafio/Imagenes/ImagenesElDesafio';
import BotonWP from '../../Utilidades/BotonWP/BotonWP';
import ResultadosM42 from '../../Carreras/M42/Resultados/ResultadosM42';
import ResultadosDesafio from '../../Carreras/ElDesafio/Resultados/ResultadosDesafio';
import AlojamientosM42 from '../../Carreras/M42/AlojamientosM42/AlojamientosM42';
import AlojamientosDesafio from '../../Carreras/ElDesafio/Alojamientos/AlojamientosDesafio';
import Circuito from '../../Carreras/Circuito/Circuito';
import Alecec from '../../Carreras/Alecec/Alecec';
import ElDesafioPinamar from '../../Carreras/ElDesafioPinamar/ElDesafioPinamar'; 
import AlojamientosPinamar from '../../Carreras/ElDesafioPinamar/AlojamientosPinamar/AlojamientosPinamar';
import ResultadosPinamar from '../../Carreras/ElDesafioPinamar/ResultadosPinamar/ResultadosPinamar';
import Colinas from '../../Carreras/Colinas/Colinas';
import Index from '../../../Pages/Index.js/Index';
import Error from '../../Secciones/Error404/Error';
import Footer from '../../Footer/Footer';
import BannerTablet from '../../BannerTablet/BannerTablet';

/* Css */
import '../AppRouter/appRouter.css'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <ScrollToTop />
            <BotonWP />    
            <header>
            <Navbar />
            </header>    
            <main className='main'>        
            <Banner / >
            <BannerTablet />
            <BannerDesktop /> 
            <Routes >
           
            <Route path='/' element={<Index />} />
            <Route path='/desafio-columbia' element={<ElDesafio />} />
            <Route path='/desafio-columbia/fotos2022' element={<ImagenesElDesafio />} />
            <Route path='/desafio-columbia/resultados' element={<ResultadosDesafio />} />
            <Route path='/desafio-columbia/alojamientos' element={<AlojamientosDesafio />} />
            <Route path='/m42' element={<M42 />} />
            <Route path='/m42/fotos2022' element={<ImagenesM42 />} />
            <Route path='/m42/resultados' element={<ResultadosM42 />} />
            <Route path='/m42/alojamientos' element={<AlojamientosM42 />} />
            <Route path='/alcec' element={<Alecec />} />
            <Route path='/desafio-pinamar' element={<ElDesafioPinamar />} />
            <Route path='/desafio-pinamar/alojamientos' element={<AlojamientosPinamar />} />
            <Route path='/desafio-pinamar/resultados' element={<ResultadosPinamar />} />
            <Route path='/colinasenaccion' element={<Colinas />} />
            <Route path='/circuito' element={<Circuito />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/contacto' element={<Contacto />} />
            
            <Route path='*' element={<Error />} />

            </Routes>
            </main>
            <Footer /> 

            </ BrowserRouter>
        </div>
    );
};

export default AppRouter;