import React from "react";
import { Link, useNavigate } from "react-router-dom";
import satyam from "/satyam.jpg";
import anshuman from "/anshuman.jpg";
import abhay from "/abhay.jpg";
import anand from "/anand.jpg";
import noimage from "/noimage.jpg";

const About = () => {
  document.title = "Medico | AboutUs";
  const navigate = useNavigate();

  const contributors = [
    {
      name: "Abhay",
      role: "Backend Developer",
      image: abhay,
      mail: "abhaysingh13072009@gmail.com",
    },
    {
      name: "Anshuman",
      role: "Backend Developer",
      image: anshuman,
      mail: "anshumansingh0010@gmail.com",
    },
    {
      name: "Satyam",
      role: "Frontend Developer",
      image: satyam,
      mail: "satyamjha7573@gmail.com",
    },
    {
      name: "Anand",
      role: "Frontend Developer",
      image: anand,
      mail: "anandkr.5055@gmail.com",
    },
  ];

  return (
    <div className="h-[100%] w-full">
      <div className="px-5 my-[2%] flex">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] text-4xl text-[#cdcae1] ri-arrow-left-line"
        ></Link>
        <h1 className="text-2xl text-white font-bold mx-2">
          <i className="text-[#6556CD] ri-hospital-fill"></i>
          <span className="">MEDICO</span>
        </h1>
      </div>
      <div className="w-full bg-[#1f1e24] text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-[#6556CD] mb-6">About Medico</h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mb-6">
          Medico is your trusted source for comprehensive medicine search and
          descriptions. Our platform helps users easily access accurate
          information about various medicines, including usage, dosage, side
          effects, and interactions. Whether you're a healthcare professional
          or someone managing personal health, Medico simplifies medicine
          exploration with real-time updates and a user-friendly interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#6556CD]">
              Our Mission
            </h2>
            <p className="mt-2 text-gray-400">
              We strive to empower individuals with knowledge about
              medicines. Our goal is to ensure that every user finds
              reliable and detailed information about the medicines they
              need, promoting safer healthcare decisions.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#6556CD]">
              Key Features
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-400">
              <li>Search for any medicine instantly.</li>
              <li>Detailed descriptions, dosages, and warnings.</li>
              <li>Learn about interactions and side effects.</li>
              <li>Accurate real-time data to ensure reliability.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-md max-w-2xl">
          <h2 className="text-2xl font-semibold text-[#6556CD]">
            Why Choose Medico?
          </h2>
          <p className="mt-2 text-gray-400">
            Unlike generic health platforms, Medico is designed with precision
            and accuracy. Our database is regularly updated, ensuring users
            receive the most current information. We bridge the gap between
            patients and essential medicine knowledge, making healthcare more
            accessible.
          </p>
        </div>

        {/* Contributors Section */}
        <div className="mt-8 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-[#6556CD] mb-6 text-center">
            Our Contributors
          </h2>
          <div className="flex  shadow-[8px_17px_38px_2px_rgba(0,0,0,0.9)] justify-between gap-6 ">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="flex flex-col w-1/4 items-center p-4 bg-gray-800 shadow-md"
              >
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-white">
                  {contributor.name}
                </h3>
                <p className="text-gray-400">{contributor.role}</p>
                <p className="text-sm text-gray-500">{contributor.mail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;