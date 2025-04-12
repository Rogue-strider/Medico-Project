import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  document.title = "Medico | ContactUs ";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    document.title = "Medico | ContactUs";
    e.preventDefault();
    try {
      // Example: Send data to backend (replace URL with your API endpoint)
      await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setResponseMessage(
        "Thank you for contacting us! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResponseMessage("Oops! Something went wrong. Please try again later.");
    }
  };
  const onSubmit = () => {
    preventDefault();
    toast.success("Contact Updated Successfully");
  };
  return (
    <>
      <div className="px-5 my-[2%] h-[5vh] flex">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] text-4xl text-[#cdcae1] ri-arrow-left-line "
        ></Link>
        <h1 className="text-2xl text-white font-bold mx-2">
          <i className="text-[#6556CD] ri-hospital-fill"></i>
          <span className="">MEDICO</span>
        </h1>
      </div>
      <div className="w-full h-[95vh] bg-[#1f1e24] flex flex-col items-center justify-center p-5">
        <h1 className="text-3xl font-bold mb-8 text-[#6556CD] text-center">
          Contact Us
        </h1>
        <form
          className="w-full max-w-md bg-[#1f1e24] border border-gray-700 p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-[#6556CD] font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-white rounded-lg text-white focus:outline-none focus:border-[#6556CD]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#6556CD] font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-white  rounded-lg text-white focus:outline-none focus:border-[#6556CD]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#6556CD] font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message or Query"
              rows="4"
              className="w-full px-4 py-2 border border-white rounded-lg text-white focus:outline-none focus:border-[#6556CD]"
              required
            />
          </div>
          <button
            onClick={() => onSubmit}
            type="submit"
            className="w-full bg-[#6556CD] text-white py-2 px-4 rounded-lg hover:bg-[#e6b200] transition duration-200"
          >
            Submit
          </button>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center text-[#6556CD] font-medium">
            {responseMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default Contact;
