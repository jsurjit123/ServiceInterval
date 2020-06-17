import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./component/user/ListUserComponent";
import AddUserComponent from "./component/user/AddUserComponent";
import EditUserComponent from "./component/user/EditUserComponent";
import ViewEquipments from './component/Equipment/ViewEquipments';
import AddEquipment from './component/Equipment/AddEquipment'
import EditEquipment from './component/Equipment/EditEquipment'

import ViewVehicleModels from './component/VehicleModel/ViewVehicleModels';
import AddVehicleModel from './component/VehicleModel/AddVehicleModel'
import EditVehicleModel from './component/VehicleModel/EditVehicleModel'

import ViewServiceInformation from './component/ServiceInformation/ViewServiceInformation'

// import logo from './component/Header.png';

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h2>Service Information</h2> <br/><br/>
                  {/* <img src={logo} alt="logo" style={logostyle} /> */}
                  <Switch>
                      <Route path="/" exact component={ListUserComponent} />
                      <Route path="/users" component={ListUserComponent} />
                      <Route path="/add-user" component={AddUserComponent} />
                      <Route path="/edit-user" component={EditUserComponent} />

                      <Route path="/" exact component={ViewEquipments} />
                      <Route path="/equipment" component={ViewEquipments} />
                      <Route path="/add-equipment" component={AddEquipment} />
                      <Route path="/edit-equipment" component={EditEquipment} />

                      <Route path="/" exact component={ViewVehicleModels} />
                      <Route path="/VehicleModel" component={ViewVehicleModels} />
                      <Route path="/add-vehicleModel" component={AddVehicleModel} />
                      <Route path="/edit-vehicleModel" component={EditVehicleModel} />

                      <Route path="/" exact component={ViewServiceInformation} />
                      <Route path="/ServiceInformation" component={ViewServiceInformation} />

                  </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;
