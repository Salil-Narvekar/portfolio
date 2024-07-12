import React, {useEffect} from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import PortfolioMain from "./Components/PortfolioMain";

function App() {

  useEffect(() => {
    document.title = "Salil_Narvekar_Portfolio";
  }, []);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<PortfolioMain />} />
        </Routes>
      </HashRouter>    
    </div>
  );
}

export default App;
