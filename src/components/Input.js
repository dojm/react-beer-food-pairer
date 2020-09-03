import React from "react";

const Input = ({ foodInput, handleSubmit, handleChange }) => {
  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <div id="validation-output"></div>
        <input
          type="text"
          className="form-control form-control-sm"
          id="food-input"
          name="foodInput"
          placeholder="What are you eating?"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Find my beer!
      </button>
    </form>
  );
};

export default Input;
