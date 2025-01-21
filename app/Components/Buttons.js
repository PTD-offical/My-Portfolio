import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ name, onClick, disabled = false }) => {
  return (
    <button
      className={`w-32 h-9 rounded-xl bg-accent ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Buttons;