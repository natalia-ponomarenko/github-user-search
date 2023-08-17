import React from "react";
import "./UserCard.css";
import { useAppSelector } from "../../redux/hooks";

const UserCard: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  if (!user) {
    return null;
  }

  const { avatar_url, login, bio, html_url } = user;

  return (
    <div className="card">
      <img
        src={avatar_url}
        alt={`${login}'s avatar`}
        className="card__image"
      />
      <h2 className="card__login">{login}</h2>
      <p className="card__bio">{bio ? bio : "No bio provided"}</p>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="card__link"
      >
        <i className="fa-brands fa-github card__icon"></i>
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
