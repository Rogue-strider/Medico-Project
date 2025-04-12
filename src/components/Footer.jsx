import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
      <footer className="foo-container shadow">
        <div className="top-footer">
          <div className="fabout">
            <div className="flex flex-col ml-5 mb-[2vw]">
              <h2 className="text-[#6556CD] font-bold text-xl">ABOUT</h2>
              <p className="w-[75%] text-white">
                Medico is your trusted source for comprehensive **medicine
                search and descriptions**. Our platform helps users easily
                access accurate information about various medicines, including
                **usage, dosage, side effects, and interactions**{" "}
                <Link className="text-blue-700" to="/about">
                  more..
                </Link>
              </p>
            </div>

            {/* <div className="text-[#6556CD] community-logo flex flex-start text-2xl  mr-[33vw] mt-3">
              <i className="ri-instagram-line"></i>
              <i className="ri-facebook-fill"></i>
              <i className="ri-twitter-x-fill"></i>
            </div> */}
          </div>
          <div className="top-left-foo">
            <div className="quick-links mb-12">
              <h3 className="text-[#6556CD] font-bold text-xl"> Qucik Links</h3>
              <div className="text-white flex flex-col">
                <Link to="/" className="hover:text-[#e6b200]">
                  Home
                </Link>
                <Link to="/medicine" className="hover:text-[#e6b200]">
                  Medicine
                </Link>
                <Link className="hover:text-[#e6b200]">Ayurveda</Link>
                <Link
                  to="/VitaminsAndSupplement"
                  className="hover:text-[#e6b200]"
                >
                  Vitamins&Supplements
                </Link>
                <Link to="/healthConditions" className="hover:text-[#e6b200]">
                  Health&Condition
                </Link>
              </div>
            </div>
            <div className="foo-contact  ml-[15vw] mb-[4vw]">
              <span className="touch text-[#6556CD] font-semibold">
                {" "}
                Get In Touch{" "}
              </span>
              <span className="text-white hover:text-[#e6b200]">
                {" "}
                ‪+91-2928384939‬
              </span>
              <p className="text-zinc-500 hover:text-[#e6b200]">medico@gmail.com</p>
              <a
                href="mailto:satyamjha7573@gmail.com"
                className="text-white hover:text-[#e6b200]"
              >
                Send Email<i className="ri-mail-line"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="botttom-footer bg-zinc-400">
          <div className="log">
            <h1 className="text-xl text-white font-bold">
              <i className="text-[rgb(101,86,205)] ri-hospital-fill"></i>
              <span className="">MEDICO</span>
            </h1>
          </div>

          <div className="copyright text-black">
            Medico. All rights are reserved{" "}
            <span className="copy-logo">
              <i className="ri-copyright-fill"></i>
            </span>{" "}
            2025
          </div>

          <Link to="/contact" className="need-help">
            Need Help
            <i className="ri-questionnaire-line"></i>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
