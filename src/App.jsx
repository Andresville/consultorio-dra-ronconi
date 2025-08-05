import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Ortodoncia from "./pages/Ortodoncia";
import Implantes from "./pages/Implantes";
import EsteticaDental from "./pages/EsteticaDental";
import Endodoncia from "./pages/Endodoncia";
import Protesis from "./pages/Protesis";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/ortodoncia" element={<Ortodoncia />} />
        <Route path="/servicios/implantes" element={<Implantes />} />
        <Route path="/servicios/estetica-dental" element={<EsteticaDental />} />
        <Route path="/servicios/endodoncia" element={<Endodoncia />} />
        <Route path="/servicios/protesis" element={<Protesis />} />
      </Routes>
      <Footer />
    </>
  );
}
 export default App;
