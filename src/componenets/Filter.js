import React from "react";

const Filter = ({ setSearchTitle, setSearchRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setSearchRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
