import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setQueryData } from "../../redux/features/search/search";
import "./SearchBar.css";

const SearchBar = ({ refetch }: any) => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setQueryData(value));
    setValue("");
    refetch();
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={value}
        onChange={handleInputValue}
        className="search__input"
      />
      <button
        type="submit"
        className="search__button"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
