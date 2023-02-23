import React from "react";
import PropTypes from "prop-types";

function MobileNumber({ phone, setUser, error, setError }) {
  function handleMobileOnChange(e) {
    const { value } = e.target;
    setUser((prev) => ({ ...prev, phone: value }));
    const phoneIsValid = /^\d{10}$/.test(value);
    if (!phoneIsValid) {
      return setError((prev) => ({
        ...prev,
        phone: "Mobile number should be 10 digits",
      }));
    }
    return setError((prev) => ({ ...prev, phone: null }));
  }
  return (
    <div className="input__group">
      <label htmlFor="inputMobileNumber" className="input__label">
        Mobile number
      </label>
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={handleMobileOnChange}
        className={`input__box ${error ? "input__error" : null}`}
        id="inputMobileNumber"
        placeholder="Please enter your Mobile number"
      />
      {error && <span className="input__error_text">{error}</span>}
    </div>
  );
}

MobileNumber.propTypes = {
  phone: PropTypes.string,
  setUser: PropTypes.func,
  error: PropTypes.any,
  setError: PropTypes.func,
};

export default MobileNumber;
