import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditVehicleModel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            equipmentTypeId: '',
            modelId: '',
            modelName: '',
        }

        this.saveVehicleModel = this.saveVehicleModel.bind(this);
        this.loadVehicleModel = this.loadVehicleModel.bind(this);
    }

    componentDidMount() {
        this.loadVehicleModel();
    }

    loadVehicleModel() {
        ApiService.fetchVehicleModelById(window.localStorage.getItem("modelId"))
            .then((res) => {
                let vehicleModel = res.data.result;
                this.setState({

                    modelId: vehicleModel.modelId,
                    modelName: vehicleModel.modelName,
                    equipmentTypeId: vehicleModel.equipmentTypeId,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveVehicleModel = (e) => {
        e.preventDefault();
        let vehicleModel = { modelId: this.state.modelId, modelName: this.state.modelName, equipmentTypeId: this.state.equipmentTypeId, };
        ApiService.editVehicleModel(vehicleModel)
            .then(res => {
                this.setState({ message: 'VehicleModel added successfully.' });
                this.props.history.push('/VehicleModel');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit VehicleModel</h2>
                <form>

                    <div className="form-group">
                        <label>Model Id:</label>
                        <input type="modelId" placeholder="modelId" name="modelId" className="form-control" readonly="true" defaultValue={this.state.modelId} />
                    </div>

                    <div className="form-group">
                        <label>Model Name</label>
                        <input type="modelName" placeholder="Vehicle Model Name" name="modelName" className="form-control" value={this.state.modelName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Equipment Type ID</label>
                        <input type="text" placeholder="equipmentTypeId" name="equipmentTypeId" className="form-control"  value={this.state.equipmentTypeId} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success" onClick={this.saveVehicleModel}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditVehicleModel;