import { Link } from "react-router-dom";

const Sidenav = ({isOpen, toggleSideNav, openSideNav}) => {
  return (
    <>
     
     <div className={`top-0  h-full z-50 transition-all duration-300 
  ${isOpen ? "w-[20%] p-10 border-r-2 border-zinc-400" : "w-0 overflow-hidden"}`}>
        <div className="flex justify-between">
          <h1 className="text-2xl text-white font-bold">
            <i className="text-[rgb(101,86,205)] ri-hospital-fill"></i>
            <span className="">MEDICO</span>
          </h1>
          <i
            onClick={toggleSideNav}
            className={`text-3xl text-[rgb(101,86,205)] cursor-pointer ${
              isOpen ? "ri-arrow-left-box-line" : "ri-arrow-right-box-line"
            }`}
          ></i>
        </div>

        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            Categories
          </h1>
          <Link
            to="/"
            className="hover:bg-[#6556CD] rounded-lg hover:text-white duration-300 
        p-5"
          >
            <i className="ri-home-5-line"></i>
            Home
          </Link>
          <Link
            to="/medicine"
            className="hover:bg-[#6556CD] rounded-lg hover:text-white duration-300 
        p-5"
          >
            <i className="ri-capsule-line"></i>
            Medicine
          </Link>
          <Link
            to="/healthConditions"
            className="hover:bg-[#6556CD] rounded-lg hover:text-white duration-300 
        p-5"
          >
            <i className="mr-2 ri-bard-fill"></i>
            Health Conditions
          </Link>
          <Link
            to="/personalCare"
            className="hover:bg-[#6556CD] rounded-lg hover:text-white duration-300 
        p-5"
          >
            <i className="ri-empathize-fill"></i>
            Personal Care
          </Link>
          <Link
            to="/VitaminsAndSupplement"
            className="hover:bg-[#6556CD] rounded-lg hover:text-white duration-300 
        p-5"
          >
            <i className="ri-capsule-fill"></i>
            Vitamins and Supplement
          </Link>
          {/* <Link
            to="/HealthGuide"
            className="hover:bg-[#6556CD] rounded-lg hover:text-white duration-300 
        p-5"
          >
            <i className="ri-health-book-fill"></i>
            Health Guide
          </Link> */}
          <Link
            to="/prescription"
            className="hover:bg-[#6556CD] rounded-lg hover:text-white duration-300 
        p-5"
          >
            <i className="ri-health-book-fill"></i>
            Presciption
          </Link>
        </nav>

        <hr className="border-none h-[1px] bg-zinc-400" />
        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            Website Information
          </h1>
          <Link
            to="/about"
            className="hover:bg-[#6556CD] rounded-lg hover:text-white duration-300 
        p-5"
          >
            <i className="mr-2 ri-information-fill"></i>
            About MEDICO
          </Link>
          <Link
            to="/contact"
            className="hover:bg-[#6556CD] rounded-lg hover:text-white duration-300 
        p-5"
          >
            <i className="mr-2 ri-phone-fill"></i>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
