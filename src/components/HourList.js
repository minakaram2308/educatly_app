import React from "react";
import { Link } from "react-router-dom";
import HourCard from "./HourCard";

const HourList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getHourId(id);
  };

  const renderHourList = props.Hours.map((Hour) => {
    return (
      <HourCard
        Hour={Hour}
        clickHander={deleteConactHandler}
        key={Hour.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
      Last 7 days working hours history
        <Link to="/add">
          <button className="ui button blue right">Add</button>
        </Link>
      </h2>
      <div className="ui celled list row mt-5">{renderHourList}</div>
    </div>
  );
};

export default HourList;
