import React, { useState, useEffect } from "react";

function Search({ setPlant, plants }) {
  const [searchPlant, setSearchPlant] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    setSearchPlant(value); 
  };
  useEffect(() => {
    
    const filteredPlants = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchPlant.toLowerCase()) 
    )
    if (filteredPlants.length !== plants.length) {
      setPlant(filteredPlants); 
    }
  }, [searchPlant, plants, setPlant]); 

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchPlant}
        placeholder="Type a name to search..."
        onChange={handleInput} 
      />
    </div>
  );
}

export default Search;
