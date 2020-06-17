import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import ServiceActionsData from '../data/ServiceActions.json'
import BorderWrapper from 'react-border-wrapper'

class ViewServiceInformation extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            equipments: [],
            vehicleModels: [],
            newVehicleModels: [],
            message: null,
            selectedEquipmentTypeId: "",
            selectedEquipmentTypeName: "",
            selectedVehicleModelId: "",
            selectedVehicleModelName: "",
            validationError: "",
            selectedOption: { equipmentTypeId: 1, equipmentTypeName: "One" },
            selectedOption2: { vehicleModelId: "", vehicleModelName: "", equipmentTypeId: "" },
            engineHours: 0,
            serviceActions: [],
            errorMessage: "",
            onlyActions: []

        }

        this.reloadEquipmentList = this.reloadEquipmentList.bind(this);
        this.reloadVehicleModelList = this.reloadVehicleModelList.bind(this);
    }

    componentDidMount() {
        this.reloadEquipmentList();
        this.reloadVehicleModelList();

        this.setState({serviceActions: ServiceActionsData.filter(singleAction => ( this.state.engineHours > singleAction.hours_min &&  this.state.engineHours <= singleAction.hours_max))});

    }

    reloadEquipmentList() {
        ApiService.fetchEquipments()
            .then((res) => {
                this.setState({ equipments: res.data.result })
            });
    }

    reloadVehicleModelList() {
        ApiService.fetchVehicleModels()
            .then((res) => {

                this.setState({ vehicleModels: res.data.result })

            });
    }

    handleChange = (e) => {
        
        var clickedId = e.target.value;
        //console.log(clickedId);
        this.setState({engineHours: clickedId});
        //alert("It works! You clicked " + clickedId)

        if(this.state.engineHours < 1) {

            this.setState({errorMessage: "Engine hours cannot be less than 1."});
        }
        else {
            this.setState({errorMessage:""});
        }
      }
    
      handleSubmit = (event) => {
       
        event.preventDefault();

        this.setState({serviceActions: ServiceActionsData.filter(singleAction => 
            ( this.state.engineHours > singleAction.hours_min &&  this.state.engineHours <= singleAction.hours_max))
        });
        
        
    }

    render() {

        return (
            <div>
                {/* <h2 className="text-center">Equipment Details</h2> */}

                <BorderWrapper borderColour="#367c2b">
      
                <form onSubmit={this.handleSubmit} style={{width: 300, alignContent:'center'}}>
                <label>Equipment Type: <br/>
                    <select
                        value={this.state.selectedEquipmentTypeName}
                        onChange={event =>
                            this.setState({
                                selectedEquipmentTypeName: event.target.value,
                                selectedEquipmentTypeId: event.target.selectedIndex + 1,
                                validationError: event.target.value === "" ? "--" : "",
                                newVehicleModels: this.state.vehicleModels.filter(
                                    model => model.equipmentTypeId === event.target.selectedIndex + 1)
                            })}>
                        {this.state.equipments.map((equipment) => <option key={equipment.key} value={equipment.value}>{equipment.equipmentTypeName}</option>)}
                    </select>
                    </label> <br/><br/>

                    <label>Model: <br/>
                    <select
                        value={this.state.selectedVehicleModelName}
                        onChange={newModel =>
                            this.setState({
                                selectedVehicleModelName: newModel.target.value,
                                selectedVehicleModelId: newModel.target.key,
                                validationError: newModel.target.value === "" ? "--" : ""
                            })} >
                        {this.state.newVehicleModels.map((vehicleModel) => <option key={vehicleModel.key} value={vehicleModel.value}>{vehicleModel.modelName}</option>)}
                    </select>
                    </label> <br/><br/>
                    <label>Engine Hours: <br/>
                         <input type="text" value={this.state.engineHours} onChange={this.handleChange} />  
                        </label>
                        <br/><br/>
                    <input type="submit" value="Submit" />
                </form>

                <div style={{ color: 'red', marginTop: '5px' }}>
                    <label> {this.state.errorMessage}
                    </label>
                </div>
                </BorderWrapper>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Service Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.serviceActions.map(
                                singleAction =>
                                    <tr key={singleAction.id}>

                                    <td>
                                            {singleAction.actions}
                                    </td>
                                    </tr>
                            )
                        }
                    </tbody>
            </table>         
                

                {/* <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>ID</th>
                            <th>Hours Min</th>
                            <th>Hours Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.serviceActions.map(
                                serviceAction =>
                                    <tr key={serviceAction.id}>

                                            {hours_min.map(s => (<td>{s}</td>))}


                                    </tr>
                            )
                        }
                    </tbody>
                </table> */}

                {/* <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Equipment Type ID</th>
                            <th>Equipment Type Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.equipments.map(
                                equipment =>
                                    <tr key={equipment.equipmentTypeId}>
                                        <td>{equipment.equipmentTypeId}</td>
                                        <td>{equipment.equipmentTypeName}</td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Model ID</th>
                            <th>Model Name</th>
                            <th>Equipment Type ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.newVehicleModels.map(
                                vehicleModel =>
                                    <tr key={vehicleModel.modelId}>
                                        <td>{vehicleModel.modelId}</td>
                                        <td>{vehicleModel.modelName}</td>
                                        <td>{vehicleModel.equipmentTypeId}</td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table> */}

            </div>
        );
    }

}

export default ViewServiceInformation;