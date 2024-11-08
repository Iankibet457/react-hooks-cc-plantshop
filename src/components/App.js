import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
   const[plants, setPlant] = useState([])

  return (
    <div className="app">
      <Header />
      <PlantPage 
      setPlant={setPlant}
      plants={plants}
      
      />
    </div>
  );
}

export default App;
