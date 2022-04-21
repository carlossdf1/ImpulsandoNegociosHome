import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const pages = ['INICIO', 'ABOUT', 'BLOGS'];
const settings = ['Perfil', 'Cuenta', 'Dashboard', 'Salir'];
ReactDOM.render(
  <React.StrictMode>
    <Navbar title={'Impulsando Negocios'} pages={pages}  settings={settings}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>,
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
