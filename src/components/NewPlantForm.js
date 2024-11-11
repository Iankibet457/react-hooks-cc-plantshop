import React, { useState } from "react";

function NewPlantForm({ setPlant }) {
  
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price, 
    };

    
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => {
        setPlant((prevPlants) => [...prevPlants, data]); 
        setFormData({ name: "", image: "", price: "" }); 
      })
      .catch((error) => {
        console.error("Error adding plant:", error);
      });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Plant name"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          type="number"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
