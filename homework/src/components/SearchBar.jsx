import React, { useState } from "react";
import './search.css';

export default function SearchBar({onSearch}) {
  const [city,setCity]=useState("");

  return (
    <form  class="d-flex" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")

    }}>
      <input
      className="form-control me-2"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e=>setCity(e.target.value)}
      />
      
      <button className="btn btn-outline-success" type="submit" value="Agregar" color="red" >Agregar</button>
    </form>
  );
}
