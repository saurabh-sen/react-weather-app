import React, { useState, useEffect } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      {/*  */}
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">Search a existing location</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fa fa-street-view" aria-hidden="true"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">{city.temp_min}°Cel | {city.temp_max}°Cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Tempapp;
