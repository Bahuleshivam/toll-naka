import addSelectToll from "../../Features/AddVelEntrySlice";
import "../vehicleEntry/Addentry.css";
import { useDispatch, useSelector } from "react-redux";

const AddVehicleEntry = () => {
  let vehicleList = useSelector((state) => state.addVelEnt); // Fixed the selector to use the correct slice name
  let dispatch = useDispatch();

  const onSelectToll = (e) => {
    const selectedToll = e.target.value;
    dispatch(addSelectToll(selectedToll));
  };

  console.log(vehicleList);

  return (
    <form action="" className="form-container">
      <div className="form">
        <div className="TollName">
          <h3>Select the toll Name</h3>
          <select name="" id="" onChange={onSelectToll}>
            <option value="Select the toll Name">Select the toll Name</option>
            <option value="Latur">Latur</option>
            <option value="pune">pune</option>
          </select>
        </div>

        <div className="Vtype">
          <label htmlFor="">Vehicle type</label>
          <span>
            <select name="" id="">
              <option value="Select Vehical Type">Select Vehical Type</option>
              <option value="Car/Jeep/Van">Car/Jeep/Van</option>
              <option value="LCV">LCV</option>
              <option value="Truck/Bus">Truck/Bus</option>
              <option value="Heavy vehicle">Heavy vehicle</option>
            </select>
          </span>
        </div>

        <div className="Vnumber">
          <label htmlFor="">Vehicle Number</label>
          <span>
            <input type="text" placeholder="Vehicle Number" />
          </span>
        </div>

        <div className="journey-type">
          <label htmlFor="">Journey Type</label>
          <span>
            <span>
              <input type="radio" />
              <label htmlFor="">single journey</label>
            </span>
            <span>
              <input type="radio" />
              <label htmlFor="">return journey</label>
            </span>
          </span>
        </div>

        <div className="tollName">
          <h2 className="trf">TARIFF</h2>
          <span className="tariff">
            <span></span>
          </span>
        </div>

        <button>ADD</button>
      </div>
    </form>
  );
};

export default AddVehicleEntry;
