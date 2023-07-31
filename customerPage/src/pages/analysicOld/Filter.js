import React from "react";

/**
 * @author
 * @function Filter
 **/

export const Filter = ({ filter, setFilter }) => {
  return (
    <span className="input__wrapper">
      <i class="fas fa-search"></i>
      <input
        className="input-search"
        placeholder="Tìm kiếm"
        // value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
