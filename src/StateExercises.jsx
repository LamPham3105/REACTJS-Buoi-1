import React, { useState } from "react";

const StateExercises = () => {
  const blackCar = "/img/black-car.jpg";
  const redCar = "/img/red-car.jpg";
  const silverCar = "/img/silver-car.jpg";
  const steelCar = "/img/steel-car.jpg";

  const [imgChanged, setImgChanged] = useState(steelCar);

  return (
    <div className="container">
      <h3>Change color car</h3>
      <div className="row">
        <div className="col-4">
          <img className="w-100" src={imgChanged} alt="..." />
        </div>
        <div className="col-8">
          <button
            style={{ background: "red" }}
            className="btn mx-2 text-white"
            onClick={() => {
              setImgChanged(redCar);
            }}
          >
            Red color
          </button>
          <button
            style={{ background: "gray" }}
            className="btn mx-2 text-white"
            onClick={() => {
              setImgChanged(silverCar);
            }}
          >
            Silver color
          </button>
          <button
            style={{ background: "black" }}
            className="btn mx-2 text-white"
            onClick={() => {
              setImgChanged(blackCar);
            }}
          >
            Black color
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateExercises;
