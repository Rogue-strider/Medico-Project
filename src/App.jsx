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
import Medicinealternative from "./components/Medicinealternative";
import Searchedmedicine from "./components/Searchedmedicine";
import Cart from "./components/Cart";
import MedicDetails from "./components/Medicdetails.jsx";
// import Medicinesalternative from "./components/Medicinealternative.jsx";

const App = () => {
  return (
    <div className="bg-[#161616] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/medicine/alternative/:id" element={<Medicinealternative />}/>
        <Route path="/medicine/details/:id" element={<MedicDetails/>}/>
          {/*<Route path="/searchedmedicine" element={<Searchedmedicine />} />*/}
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
          <Route path="/carts" element={<Cart/>} />
      </Routes>

      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default App;
