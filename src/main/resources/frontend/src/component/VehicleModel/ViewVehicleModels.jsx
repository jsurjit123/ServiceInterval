import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ViewVehicleModels extends Component {

    constructor(props) {
        super(props)
        this.state = {
            vehicleModels: [],
            message: null
        }

        this.deleteVehicleModel = this.deleteVehicleModel.bind(this);
        this.editVehicleModel = this.editVehicleModel.bind(this);
        this.addVehicleModel = this.addVehicleModel.bind(this);
        this.reloadVehicleModelList = this.reloadVehicleModelList.bind(this);
    }

    componentDidMount() {
        this.reloadVehicleModelList();
    }

    reloadVehicleModelList() {
        ApiService.fetchVehicleModels()
            .then((res) => {
                this.setState({vehicleModels: res.data.result})
            });
    }

    deleteVehicleModel(modelId) {
        ApiService.deleteVehicleModel(modelId)
           .then(res => {
               this.setState({message : 'VehicleModel deleted successfully.'});
               this.reloadVehicleModelList();
               //this.setState({equipments: this.state.equipments.filter(equipment => equipments.equipmentTypeId !== equipmentTypeId)});
           })

    }

    editVehicleModel(modelId) {
        window.localStorage.setItem("modelId", modelId);
        this.props.history.push('/edit-vehicleModel');
    }

    addVehicleModel() {
        window.localStorage.removeItem("modelId");
        this.props.history.push('/add-vehicleModel');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Vehicle Model Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addVehicleModel()}> Add Vehicle Model</button>
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
                            this.state.vehicleModels.map(
                                vehicleModel =>
                                    <tr key={vehicleModel.modelId}>
                                        <td>{vehicleModel.modelId}</td>
                                        <td>{vehicleModel.modelName}</td>
                                        <td>{vehicleModel.equipmentTypeId}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteVehicleModel(vehicleModel.modelId)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editVehicleModel(vehicleModel.modelId)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ViewVehicleModels;