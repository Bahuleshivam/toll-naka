import React from 'react';
import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2 className='heading'>Toll Management Application</h2>

      <div className="btns">
        <Link className='primary-btn' to='/AddVehicleEntry'>Add Vehicle Entry</Link>
        <Link className='primary-btn' to='/Newtoll'>Add New Toll</Link>
        <Link className='primary-btn' to='/List'>See Tolls List</Link>
      </div>
    </nav>
  );
}

export default Navbar;
