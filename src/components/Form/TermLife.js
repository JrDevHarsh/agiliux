import React, { useState } from "react";
import PreviewQuotesButton from "../Button/PreviewQuotes";
import DOB from "../InputGroup/DOB";
import MobileNumber from "../InputGroup/MobileNumber";
import Name from "../InputGroup/Name";
import OptionGender from "../InputGroup/OptionGender";
import SelectCountry from "../InputGroup/SelectCountry";
import "./TermLife.css";

function TermLifeForm() {
  const [user, setUser] = useState({
    gender: "male",
    fullname: "",
    phone: "",
    dob: "",
    country: "",
  });
  const [error, setError] = useState({
    gender: null,
    fullname: null,
    phone: null,
    dob: null,
    country: null,
  });

  function handleFormOnSubmit(e) {
    e.preventDefault();
    let hasError = false;
    if (user.fullname === "") {
      hasError = true;
      setError((prev) => ({ ...prev, fullname: "Invalid details" }));
    }
    if (user.dob === "") {
      hasError = true;
      setError((prev) => ({ ...prev, dob: "Invalid details" }));
    }
    if (user.phone === "") {
      hasError = true;
      setError((prev) => ({ ...prev, phone: "Invalid details" }));
    }
    if (user.country === "") {
      hasError = true;
      setError((prev) => ({ ...prev, country: "Invalid details" }));
    }
    if (error.dob || error.fullname || error.phone || hasError) return;
    // send data to backend
    alert("Submitted");
  }

  return (
    <form className="form__container" onSubmit={handleFormOnSubmit}>
      <OptionGender gender={user.gender} setUser={setUser} />
      <Name
        name={user.fullname}
        setUser={setUser}
        error={error.fullname}
        setError={setError}
      />
      <DOB
        dob={user.dob}
        setUser={setUser}
        error={error.dob}
        setError={setError}
      />
      <MobileNumber
        phone={user.phone}
        setUser={setUser}
        error={error.phone}
        setError={setError}
      />
      <SelectCountry
        country={user.country}
        setUser={setUser}
        error={error.country}
        setError={setError}
      />
      <p className="tac__text">
        By clicking, you agree to our{" "}
        <span className="pink__underline">Privacy, policy, Terms of Use</span> &{" "}
        <span className="pink__underline"> Disclaimers</span>
      </p>
      <PreviewQuotesButton />
    </form>
  );
}

export default TermLifeForm;
