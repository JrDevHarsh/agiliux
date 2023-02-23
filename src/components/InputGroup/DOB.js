import React from "react";
import PropTypes from "prop-types";

function DOB({ dob, setUser, error, setError }) {
  function handleDobOnChange(e) {
    const { value } = e.target;
    setUser((prev) => ({ ...prev, dob: value }));
    const dobIsValid = validateDateOfBirth(value);
    if (!dobIsValid) {
      return setError((prev) => ({
        ...prev,
        dob: "You should be 21 years of age to apply for insurance policy",
      }));
    }
    return setError((prev) => ({ ...prev, dob: null }));
  }

  function validateDateOfBirth(dateOfBirth) {
    // Create a Date object from the input
    const DOB = new Date(dateOfBirth);
    // Calculate the age difference in milliseconds
    const ageDiffMs = Date.now() - DOB.getTime();
    // Convert the age difference to years
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    // Check if the age is less than 21
    if (age < 21) {
      return false;
    }
    // If the age is 21 or older, return true to indicate a valid date of birth
    return true;
  }
  return (
    <div className="input__group">
      <label htmlFor="inputDOB" className="input__label">
        DOB
      </label>
      <input
        type="date"
        value={dob}
        name="dob"
        onChange={handleDobOnChange}
        className={`input__box ${error ? "input__error" : null}`}
        id="inputDOB"
        placeholder="Select your Date of Birth"
      />
      {error && <span className="input__error_text">{error}</span>}
    </div>
  );
}

DOB.propTypes = {
  dob: PropTypes.string,
  setUser: PropTypes.func,
  error: PropTypes.any,
  setError: PropTypes.func,
};

export default DOB;
