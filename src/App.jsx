import React, { useEffect } from 'react'
import LandingPage from "./LandingPage/LandingPageMain"
import { HashRouter, Route, Routes } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
