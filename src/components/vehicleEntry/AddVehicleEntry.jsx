import React from 'react';
import '../vehicleEntry/Addentry.css'
import { useState } from 'react';

const AddVehicleEntry = () => {

      const [selectToll, setSelectToll] = useState('');
      const [vehicleType, setVehicleType] = useState('');
      const [vehicleNumber, setVehicleNumber] = useState('');
      const [journeyType, setJourneyType] = useState(
        {
          singleJourney : "",
          returnJourney : ""

        }
      );
      console.log(selectToll)


  return (
    <form action="" className='form-container'>
      <div className="form">

        <div className='TollName'>
          <h3>Select the toll Name</h3>
          <select name="" id="" onChange={(e)=> setSelectToll(e.target.value)}>
            <option value="Select the toll Name">Select the toll Name</option>
            <option value="Latur">Latur</option>
            <option value="pune">pune</option>
          </select>
        </div>

        <div className="Vtype">
          <label htmlFor="">Vehicle type</label>
          <span>
            <select name="" id="" onChange={(e)=> setVehicleType(e.target.value)}>
              <option value="Select Vehical Type">Select Vehical Type</option>
              <option value="Car/Jeep/Van">Car/Jeep/Van</option>
              <option value="LCV">LCV</option>
              <option value="Truck/Bus">Truck/Bus</option>
              <option value="Heavy vehicle">Heavy vehicle</option>
            </select>
          </span>

        </div>

        <div className="Vnumber">
          <label htmlFor="" >Vehicle Number</label>
          <span>
            <input type="text" placeholder='Vehicle Number' onChange={(e)=> setVehicleNumber(e.target.value)}/>

          </span>
        </div>

        <div className="journey-type">
          <label htmlFor="">Journey Type</label>
          <span>
            <span>
              <input type="radio" onChange={(e)=> setJourneyType({...journeyType,singleJourney : e.target.value})} />
              <label htmlFor="">single journey</label>

            </span>
            <span>
              <input type="radio" onChange={(e)=> setJourneyType({...journeyType,returnJourney : e.target.value})} />
              <label htmlFor="">return journey</label>

            </span>

          </span>
        </div>

        <div className="tollName">
          <h2 className="trf">TARIFF</h2>
          <span className='tariff'>
            <span></span>
            

          </span>
        </div>

        <button>ADD</button>

      </div>
    </form>

  );
}

export default AddVehicleEntry;
