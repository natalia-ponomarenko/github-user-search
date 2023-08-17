import React from "react";
import SearchBar from "./components/Search/SearchBar";
import UserCard from "./components/UserCard/UserCard";
import { useUserQuery } from "./hooks/useUser";
import Loader from "./components/Loader/Loader";
import "./App.css";
import { useAppSelector } from "./redux/hooks";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App: React.FC = () => {
  const { queryData } = useAppSelector((state) => state.queryData);

  const {
    isLoading,
    isError,
    data: userData,
    refetch,
  } = useUserQuery(queryData);

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
