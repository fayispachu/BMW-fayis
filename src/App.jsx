import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Navbar from "./component/Navbar";
import CarVersion from "./pages/CarVersion";
import M34i from "./component/M34i";

// import AllCarPage from "./pages/MclarinePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarVersion />} />
          <Route path="/pop" element={<M34i />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
