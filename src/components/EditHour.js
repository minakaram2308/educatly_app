import React from "react";

class EditHour extends React.Component {
  constructor(props) {
    super(props);
    const { id , date, arrivaltime , exittime , lunchtime } = props.location.state.Hour;
    this.state = {
      id,
      date,
      arrivaltime,
      exittime,
      lunchtime,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.date === "" || this.state.arrivaltime === "" || this.state.exittime === "" || this.state.lunchtime === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateHourHandler(this.state);
    this.setState({ id:"" , date: "",arrivaltime: "" ,exittime: "",lunchtime: ""});
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2 className="text-center">Edit Today's working hours</h2>
        <form className="ui form mt-5 col-md-4 offset-4 mMob0" onSubmit={this.update}>
        <div className="field">
            <label>Date</label>
            <input
              type="date" date-format="DD MMMM YYYY"
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
            /> 
          </div>
        <div className="field">
            <label>Arrival Time</label>
            <input
              type="time"
              value={this.state.arrivaltime}
              onChange={(e) => this.setState({ arrivaltime: e.target.value })}
            /> 
          </div>
          <div className="field">
            <label>Exit Time</label>
            <input
              type="time"
              value={this.state.exittime}
              onChange={(e) => this.setState({ exittime: e.target.value })}
            /> 
          </div>
          <div className="field">
            <label>lunch Time</label>
            <input
              type="time"
              value={this.state.lunchtime}
              onChange={(e) => this.setState({ lunchtime: e.target.value })}
            /> 
          </div>
          <button className="ui button blue d-block m-auto mt-4">Update</button>
        </form>
      </div>
    );
  }
}

export default EditHour;
