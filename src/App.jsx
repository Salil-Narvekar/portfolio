import LandingPage from "./LandingPage/LandingPageMain"
import { HashRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
