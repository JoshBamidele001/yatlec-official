import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Supports weights 100-900
import '@fontsource-variable/montserrat';

import About from './Pages/About.jsx'
import Navbar from './MyComponents/Navbar.jsx';
import OurAssemblies from './Pages/OurAssemblies.jsx';
import OurServices from './Pages/OurServices.jsx';
import TheYouthChurch from './Pages/TheYouthChurch.jsx';
import Give from './Pages/Give.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar/>
    <Routes>

        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/our-assemblies' element={<OurAssemblies/>} />
        <Route path='/our-services' element={<OurServices/>} />
        <Route path='/the-youths' element={<TheYouthChurch/>} />
        <Route path='/give' element={<Give/>} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
