import React from "react";
import PropTypes from "prop-types";

function OptionGender({ gender, setUser }) {
  function handleGenderOnChange(e) {
    const { value } = e.target;
    setUser((prev) => ({ ...prev, gender: value }));
  }
  return (
    <div className="radio__group">
      <span className="radio__title">Gender</span>
      <div className="radio__row">
        <label
          htmlFor="genderMale"
          className={`radio__label ${gender === "male" ? "selected" : null}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12.348 4.64879C13.5816 4.64879 14.5824 3.66239 14.5824 2.44319C14.5824 1.22639 13.5816 0.237591 12.348 0.237591C11.1144 0.237591 10.176 1.22399 10.176 2.44319C10.176 3.66239 11.1144 4.64879 12.348 4.64879ZM15.2472 5.38079H8.5104C8.5104 5.38079 7.5312 5.25839 7.224 6.11519V12.768C7.224 12.768 7.2504 13.4496 7.932 13.4496C7.932 13.4496 8.6904 13.4544 8.6904 12.7296V8.70719C8.6904 8.70719 9.1104 7.79279 9.4248 8.75279L9.4296 23.0184C9.4296 23.0184 9.4032 23.7504 10.1376 23.7504L10.8984 23.7624C10.8984 23.7624 11.6184 23.7552 11.6184 23.0208V16.3992C11.6184 16.3992 11.6448 16.0248 12.0288 16.0248C12.0288 16.0248 12.3648 16.1592 12.3648 16.416V23.0784C12.3648 23.0784 12.3648 23.748 13.0992 23.748H13.8384C13.8384 23.748 14.5728 23.7024 14.5728 23.0784V8.69519C14.5728 8.69519 14.8368 7.84559 15.3072 8.68319L15.3312 12.7584C15.3312 12.7584 15.1608 13.464 16.0896 13.464C16.788 13.464 16.7664 12.792 16.7664 12.792L16.7736 6.11759C16.7736 6.11519 16.4112 5.38079 15.2472 5.38079Z"
              fill="currentColor"
            />
          </svg>
          <span className="text">Male</span>
          <input
            type="radio"
            name="gender"
            id="genderMale"
            checked={gender === "male"}
            value="male"
            onChange={handleGenderOnChange}
          />
        </label>
        <label
          htmlFor="genderFemale"
          className={`radio__label ${gender === "female" ? "selected" : null}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.491"
            height="24"
            viewBox="0 0 13.491 26.982"
            fill="currentColor"
          >
            <g transform="translate(0 65)">
              <g transform="translate(0 -65)">
                <path
                  d="M14.746,9.9a2.951,2.951,0,1,0-2.951-2.951A2.944,2.944,0,0,0,14.746,9.9Zm3.373,14.334v6.746H11.373V24.237H8l4.014-10.759a2.92,2.92,0,0,1,5.464,0l4.014,10.759Z"
                  transform="translate(-8 -4)"
                  fill="currentColor"
                />
              </g>
            </g>
          </svg>

          <span className="text">Female</span>
          <input
            type="radio"
            name="gender"
            id="genderFemale"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderOnChange}
          />
        </label>
      </div>
    </div>
  );
}

OptionGender.propTypes = {
  gender: PropTypes.string,
  setUser: PropTypes.func,
};

export default OptionGender;
