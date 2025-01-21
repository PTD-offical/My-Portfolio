import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const Card = ({ title, icon, description, type }) => {
  return (
    <div className="card bg-black shadow-md rounded-lg p-6 max-w-sm transition-transform transform hover:scale-105">
      <div className="flex justify-center">
        <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <span className={`text-sm font-medium px-3 py-1 rounded-full ${type === "Technical Skills" ? "bg-blue-500 text-white" : type === "Practical Skills" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
        {type}
      </span>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Card;