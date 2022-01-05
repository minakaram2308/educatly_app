import React from "react";

class AddHour extends React.Component {

  state = {
    date: "",
    arrivaltime: "",
    exittime: "",
    lunchtime: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.date === "" || this.state.arrivaltime === ""|| this.state.exittime === ""|| this.state.lunchtime === "") {
      alert("ALl the fields are mandatory!");
      return;
    }

    this.props.addHour(this.state);
    this.setState({ date: "",arrivaltime: "" ,exittime: "",lunchtime: ""});
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main row">
        <h2 className="text-center">Add Today's working hours</h2>
        <form className="ui form mt-5 col-md-4 offset-4 mMob0" onSubmit={this.add}>
        <div className="field">
            <label>Date</label>
            <input
              type="date"
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
            <label>lunch Time (in minutes)</label>
            <input
              type="time"
              value={this.state.lunchtime}
              onChange={(e) => this.setState({ lunchtime: e.target.value })}
            />
          </div>
          <button className="ui button blue d-block m-auto mt-4">Add</button>
        </form>
      </div>
    );
  }
}

export default AddHour;
