import React from "react";

const SearchBox = ({ searchValue, searchChange }) => {
  return (
    <input
      type="search"
      placeholder="Search Robots"
      value={searchValue}
      onChange={searchChange}
    />
  );
};

export default SearchBox;
