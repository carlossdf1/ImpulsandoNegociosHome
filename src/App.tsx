import './App.css';
import { Container, Typography, Button } from '@mui/material';
import { useState } from 'react';
import BasicDataGrid from './components/UI/Tables/DataGridCustom';
import Banner from './components/UI/Banners/Banner';
import BannerDivider from './components/UI/Banners/BannerDivider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';

function App() {

  const pages = ['INICIO', 'ABOUT', 'BLOGS'];
  const settings = ['Perfil', 'Cuenta', 'Dashboard', 'Salir'];

  return (
    <>
      <Navbar title={'Impulsando Negocios'} pages={pages}  settings={settings}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </BrowserRouter>,
      <Footer />
    </>
  );
}

export default App;