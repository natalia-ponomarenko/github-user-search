import React from "react";
import SearchBar from "./components/Search/SearchBar";
import UserCard from "./components/UserCard/UserCard";
import { useUserQuery } from "./hooks/useUser";
import Loader from "./components/Loader/Loader";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setUser } from "./redux/features/user/user";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App: React.FC = () => {
  const { queryData } = useAppSelector((state) => state.queryData);
  const dispatch = useAppDispatch();

  const {
    isLoading,
    isError,
    data: userData,
    refetch,
  } = useUserQuery(queryData);

  if (userData) {
    dispatch(setUser(userData));
  }

  return (
    <div className="container-wrapper">
      <div className="container">
        <SearchBar refetch={refetch} />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {!isLoading && !isError && userData && <UserCard />}
      </div>
    </div>
  );
};

export default App;
