"use client"


import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State for modal content

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g4479f9", // Replace with your EmailJS Service ID
        "template_oyoi6um", // Replace with your EmailJS Template ID
        e.target,
        "8VEUGQ-VuWLq8nAZY" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setModalMessage("Message Sent Successfully!");
          setShowModal(true);
        },
        (error) => {
          setModalMessage("Failed to send the message. Please try again.");
          setShowModal(true);
        }
      );

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <>
      <section className="bg-gray-100 py-10" id="Contact">
        <div className="max-w-xl mx-auto bg-white text-main dark:bg-main p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">Contact Us</h2>
          <form
            id="consultation-form"
            className="feed-form space-y-4"
            onSubmit={sendEmail}
          >
            <div className="flex items-center border-b-2 border-gray-300">
              <i className="fas fa-user text-gray-500 mr-2"></i>
              <input
                name="name"
                required
                placeholder="Name"
                type="text"
                className="w-full p-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-300">
              <i className="fas fa-envelope text-gray-500 mr-2"></i>
              <input
                name="email"
                required
                placeholder="E-mail"
                type="email"
                className="w-full p-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-300">
              <i className="fas fa-comment text-gray-500 mr-2"></i>
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 bg-accent text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg text-white shadow-lg p-6 max-w-sm relative">
            {/* X Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <p className="text-lg text-center">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
