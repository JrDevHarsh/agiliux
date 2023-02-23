import React from "react";
import countryList from "../../data/countries.json";
import PropTypes from "prop-types";

function SelectCountry({ country, setUser, error, setError }) {
  function handleCountryOnChange(e) {
    const { value } = e.target;
    setUser((prev) => ({ ...prev, country: value }));
    if (value === "") {
      return setError((prev) => ({
        ...prev,
        counrty: "Select from options",
      }));
    }
    return setError((prev) => ({ ...prev, country: null }));
  }
  return (
    <div className="input__group">
      <label htmlFor="selectCountry" className="input__label">
        Select country
      </label>
      <select
        name="country"
        id="selectCountry"
        className={`select__ctr ${error ? "input__error" : null}`}
        defaultValue={country}
        onChange={handleCountryOnChange}
      >
        <option value="" disabled>
          Select
        </option>
        {countryList.map((country) => (
          <option value={country.name} key={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      {error && <span className="input__error_text">{error}</span>}
    </div>
  );
}

SelectCountry.propTypes = {
  country: PropTypes.string,
  setUser: PropTypes.func,
  error: PropTypes.any,
  setError: PropTypes.func,
};

export default SelectCountry;
