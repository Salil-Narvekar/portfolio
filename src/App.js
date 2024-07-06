import { HashRouter, Routes, Route } from "react-router-dom";
import PortfolioMain from "./Components/PortfolioMain";

function App() {
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
