import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({setPlant , plants}) {
  return (
    <main>
      <NewPlantForm setPlant={setPlant}/>
      <Search setPlant={setPlant}/>
      <PlantList 
      setPlant={setPlant}
      plants={plants}
       />
    </main>
  );
}

export default PlantPage;
