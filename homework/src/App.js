import React,{useState}from 'react';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards'

export default function App() {
  const [cities,setCities]= useState([]);
  const apiKey="4ae2636d8dfbdc3044bede63951a019b"

  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response=>response.json())
      .then(json=>{
        if(json.main !== undefined){
          const city={
            min:json.main.temp_min,
            max:json.main.temp_max,
            id:json.id,
            img:json.weather[0].icon,
            temp:json.main.temp,
            name:json.name
            


          };
          setCities(oldCities=>[...oldCities,city    ]);
        }else{
          alert(' ciudad no encontrada')
        }
      })
      .catch(e=>console.log(e))

  }
  
  function onClose(id){
    setCities(oldCities=>oldCities.filter(c=>c.id!==id))
  }




  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
            </div>
  );
}

