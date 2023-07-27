import React, { ChangeEvent } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    if (inputValue.length > 0) {
      inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    }
    onChange(inputValue);
  };

  return (
    <div className={styles["searchbar-container"]}>
      <input
        placeholder="Search"
        className="form-control text-center"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
