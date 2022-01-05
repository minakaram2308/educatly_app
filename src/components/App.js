import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/Hours";
import "../assets/css/bootstrap.css";
import "../assets/css/App.css";
import Header from "./Header";
import AddHour from "./AddHour";
import HourList from "./HourList";
import EditHour from "./EditHour";

function App() {
  const [Hours, setHours] = useState([]);

  //RetrieveHours
  const retrieveHours = async () => {
    const response = await api.get("/Hours");
    return response.data;
  };

  function getLastId(){
    if(Hours.length > 0){
      return (parseInt(Hours[Hours.length-1].id)+1)
    }
    return 1
  }

  const addHourHandler = async (Hour) => {
    console.log('asd0=>',Hour);
    const request = {
      id: getLastId(),
      ...Hour,
    };
    console.log('asd=>',request);

    const response = await api.post("/Hours", request).catch((err)=>console.log(err));
    console.log('asd=>',response);
    setHours([...Hours, response.data]);
  };

  const updateHourHandler = async (Hour) => {
    const response = await api.put(`/Hours/${Hour.id}`, Hour);
    const { id } = response.data;
    setHours(
      Hours.map((Hour) => {
        return Hour.id === id ? { ...response.data } : Hour;
      })
    );
  };

  const removeHourHandler = async (id) => {
    await api.delete(`/Hours/${id}`);
    const newHourList = Hours.filter((Hour) => {
      return Hour.id !== id;
    });

    setHours(newHourList);
  };

  useEffect(() => {
    const getAllHours = async () => {
      const allHours = await retrieveHours();
      if (allHours) setHours(allHours);
    };

    getAllHours();
  }, []);

  // useEffect(() => {}, [Hours]);

  return (
    <div>
      <Router>
        <Header />
        <div className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <HourList
                {...props}
                Hours={Hours}
                getHourId={removeHourHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddHour {...props} addHour={addHourHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditHour
                {...props}
                updateHourHandler={updateHourHandler} /> )}/>
        </Switch>
        </div>    
      </Router>
    </div>
  );
}

export default App;
