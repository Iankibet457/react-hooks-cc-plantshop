import React, { useState, useEffect } from "react";

function PlantCard({setPlant, plants}) {
  const [stockStatus, setStockStatus] = useState({});

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlant(data))
  }, [setPlant]);

  const handleStockClick = (id) => {
    setStockStatus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    plants.map((plant) => (
      <li key={plant.id} className="card" data-testid="plant-item">
        <img src={plant.image} alt={plant.name} />
        <h4>{plant.name}</h4>
        <p>Price: {plant.price}</p>
        <button 
          className={stockStatus[plant.id] ? "" : "primary"}
          onClick={() => handleStockClick(plant.id)}
        >
          {stockStatus[plant.id] ? "Out of Stock" : "In Stock"}
        </button>
      </li>
    ))
  );
}

export default PlantCard;
