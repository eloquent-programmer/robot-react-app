import React from "react";
import RobotCard from "./RobotCard";

const RobotCardList = ({ robots }) => {
  return (
    <ul>
      {robots.map((robot) => {
        return <RobotCard key={robot.id} {...robot} />;
      })}
    </ul>
  );
};

export default RobotCardList;
