import React, { ChangeEvent } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles["searchbar-container"]}>
      <input
        placeholder="Search"
        className="form-control"
        type="text"
        value={value}
        onChange={handleInputChange}
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default SearchBar;
