import React from "react";
import { useEffect } from "react";

function PlantCard({setPlant ,plants}) {
  useEffect(()=>{

    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlant(data))
  },[])

  
  
  return (
    plants.map((plant)=>(
      

    <li key={plant.id} className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
    ))
  );
}

export default PlantCard;
