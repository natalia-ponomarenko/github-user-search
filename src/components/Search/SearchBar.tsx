import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import {
  clearQueryData,
  setQueryData,
} from "../../redux/features/search/search";
import "./SearchBar.css";
import Button from "../Button/Button";

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
    refetch();
  };

  const clearTheInput = () => {
    setValue("");
    dispatch(clearQueryData());
  };

  return (
    <form
      onSubmit={handleSearch}
      className="search"
    >
      <div className="search__input-wrapper">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={value}
          onChange={handleInputValue}
          className="search__input"
        />
        {value && (
          <Button
            type="button"
            onClick={clearTheInput}
            className="search__button-close"
          >
            <i
              className="fa fa-times search__icon"
              aria-hidden="true"
            ></i>
          </Button>
        )}
      </div>
      <Button
        type="submit"
        className="search__button-submit"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
