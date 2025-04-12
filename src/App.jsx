import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Medicine from "./components/Medicine";
import HealthConditions from "./components/HealthConditions";
import PersonalCare from "./components/PersonalCare";
import VitaminsAndSupplement from "./components/VitaminsAndSupplement";
import HealthGuide from "./components/HealthGuide";
import About from "./components/About";
import Contact from "./components/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrescriptionAnalyzer from "./components/Prescription";
import Medicindetails from "./components/moviedetails";

const App = () => {
  return (
    <div className="bg-[#1f1e24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/movie/details/:id" element={<Medicindetails />}></Route>
        <Route path="/healthConditions" element={<HealthConditions />} />
        <Route path="/personalCare" element={<PersonalCare />} />
        <Route
          path="/VitaminsAndSupplement"
          element={<VitaminsAndSupplement />}
        />
        <Route path="/HealthGuide" element={<HealthGuide />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prescription" element={<PrescriptionAnalyzer />} />
      </Routes>
      r
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default App;
