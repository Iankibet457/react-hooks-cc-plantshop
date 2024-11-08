import React from "react";
import PlantCard from "./PlantCard";

function PlantList({setPlant , plants}) {
  return (
    <ul className="cards"><PlantCard setPlant={setPlant} plants={plants}/></ul>
  );
}

export default PlantList;
