import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    
    <nav  className="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container-fluid">
  <img src={Logo} alt='logo no encontrado'></img>
   
  <h6 className='hol' > Henry - Weather App</h6>
        <SearchBar onSearch={onSearch}/>
  </div>
</nav>


    
       
       
      
      
      
  );
};

export default Nav;
