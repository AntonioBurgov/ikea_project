import React, { useState } from "react";
import { FiSearch, FiCamera } from "react-icons/fi";
import "./CustomSearchBar.css"; 

const CustomSearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`custom-searchbar ${isFocused ? "focused" : ""}`}>
      <FiSearch className="search-icon" />

      <input
        type="text"
        placeholder="Търсене на продукти, стаи, идеи..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <FiCamera className="camera-icon" />
    </div>
  );
};

export default CustomSearchBar;
