import Button from "./Button/Button";
import React, { useState } from "react";

const CourseInput = function (props) {
  const [inputField, setInputField] = useState(``);
  const [isValid, setIsValid] = useState(true);
  let errorMessage = <p>You must fill in the field.</p>;

  const inputChangeHandler = function (e) {
    setInputField(e.target.value);
  };

  const formSubmit = function (e) {
    e.preventDefault();
    if (inputField.trim().length === 0) {
      setIsValid(false);

      return;
    }
    setIsValid(true);
    props.onAddGoal(inputField);
    setInputField("");
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="form-control">
        <label style={{ color: !isValid ? `red` : `black` }}>Day Goal</label>
        <input
          type="text"
          onChange={inputChangeHandler}
          value={inputField}
          style={{
            background: !isValid ? `salmon` : `#fad0ec`,
            borderColor: !isValid ? `red` : `#ccc`,
          }}
        ></input>
        {!isValid ? errorMessage : ``}
      </div>
      <Button type="submit" />
    </form>
  );
};
export default CourseInput;
