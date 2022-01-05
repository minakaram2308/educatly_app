import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/images/1.png";

function getAct(data, s) {
  var startTime = data[10];
  var endTime = data[11];
  var lunchTime = data[12];

  var st = startTime.toString().split(':');
  var e = endTime.toString().split(':');
  var l = lunchTime.toString().split(':');

  var start = parseInt(st[0])*60 + parseInt(st[1]);
  var end = parseInt(e[0])* 60+ parseInt(e[1]);
  var lunch = parseInt(l[0])*60 + parseInt(l[1]);

  var elapsedMs = start + lunch;
      elapsedMs = end - elapsedMs;
  return elapsedMs ;
}

const HourCard = (props) => {
const { id, date, arrivaltime, exittime,lunchtime } = props.Hour;

  var data=[];

data[10] = arrivaltime;
data[11] = exittime;
data[12] = lunchtime;

var minutes=getAct(data); 

var hours=parseInt(minutes/60)+" hours "+ minutes%60 +" minutes";
const subhours= minutes/60;

if(subhours >= 8){
    return (
      <div className="col-md-3 mb-5">
      <div className="item">
        <img className="ui w40 image" src={user} alt="user" />
        <div className="content">
            <h4 className="mt-3">Total working hours </h4>
           <h4 className="mb-1"> <span className="workhours bg-success">{hours}</span></h4>
           <h5 className="mb-3"> <span>Above Expected</span></h5>

            <h5>Date:  {date}</h5>
            <h5>Arrival Time:  {arrivaltime}</h5>
            <h5>Exit Time:  {exittime}</h5>
            <h5>Lunch Time:  {lunchtime}</h5>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
          onClick={() => props.clickHander(id)}
        ></i>
        <Link to={{ pathname: `/edit`, state: { Hour: props.Hour } }}>
          <i
            className="edit alternate outline icon"
            style={{ color: "blue", marginTop: "7px" }}
          ></i>
        </Link>
      </div>
      </div>
    );
  }
  else{
  return (
    <div className="col-md-3 mb-5">
    <div className="item">
      <img className="ui w40 image" src={user} alt="user" />
      <div className="content">
          <h4 className="mt-3">Total working hours </h4>
         <h4 className="mb-2"> <span className="workhours bg-danger">{hours}</span></h4>
         <h5 className="mb-3"> <span>Below Expected</span></h5>
          <h5>Date:  {date}</h5>
          <h5>Arrival Time:  {arrivaltime}</h5>
          <h5>Exit Time:  {exittime}</h5>
          <h5>Lunch Time:  {lunchtime}</h5>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { Hour: props.Hour } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
    </div>
  );
  }
};

export default HourCard;
