import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          // value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="search"
          type="text"
          className="form-control"
          placeholder="Search for employee by first name"
          id="search"
          onSubmit={props.handleFormSubmit}
        />
      </div>
    </form>
  );
}

export default SearchForm;
