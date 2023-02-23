import React from "react";
import PropTypes from "prop-types";

function Name({ name, setUser, error, setError }) {
  function handleUserNameOnChange(e) {
    const { value } = e.target;
    setUser((prev) => ({ ...prev, fullname: value }));
    if (value === "") {
      return setError((prev) => ({
        ...prev,
        fullname: "Please provide a valid name",
      }));
    }
    return setError((prev) => ({ ...prev, fullname: null }));
  }
  return (
    <div className="input__group">
      <label htmlFor="inputFullName" className="input__label">
        Full Name
      </label>
      <input
        type="text"
        value={name}
        name="fullname"
        onChange={handleUserNameOnChange}
        className={`input__box ${error ? "input__error" : null}`}
        id="inputFullName"
        placeholder="Please enter your Full Name"
      />
      {error && <span className="input__error_text">{error}</span>}
    </div>
  );
}

Name.propTypes = {
  name: PropTypes.string,
  setUser: PropTypes.func,
  error: PropTypes.any,
  setError: PropTypes.func,
};

export default Name;
