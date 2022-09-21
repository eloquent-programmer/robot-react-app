import React from "react";
import "./RobotCard.css";

const RobotCard = ({ id, name, username, email }) => {
  return (
    <li className="Robot-Card">
      <img src={`https://robohash.org/${id}`} alt="Robot" />
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
    </li>
  );
};

export default RobotCard;
