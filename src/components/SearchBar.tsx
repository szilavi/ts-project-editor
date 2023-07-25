import React, { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      placeholder="Search"
      className="form-control"
      type="text"
      value={value}
      onChange={handleInputChange}
      style={{ textAlign: "center" }}
    />
  );
};

export default SearchBar;
