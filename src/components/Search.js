import React from "react";

function Search({setPlant , plants}) {
  // const handleInput = (e)=>{
  //   e.preventDefault()
  //   const val ={

  //     value: e.target.name.value
  //   }
  //   console.log(val)
  // }


  return (
    <div className="searchbar">
      {/* <form onSubmit={handleInput}> */}

      <label htmlFor="search">Search Plants:</label>
      <input 
        type="text"
        id="search"
        name="plant-name"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
      />
      {/* </form> */}
    </div>
  );
}

export default Search;
