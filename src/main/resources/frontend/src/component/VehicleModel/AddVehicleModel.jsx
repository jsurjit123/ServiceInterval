import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddVehicleModel extends Component{

    constructor(props){
        super(props);
        this.state ={
            equipmentTypeId: '',
            modelId: '',
            modelName: '',
        }
        this.saveVehicleModel = this.saveVehicleModel.bind(this);
    }

    saveVehicleModel = (e) => {
        e.preventDefault();
        let vehicleModel = {equipmentTypeId: this.state.equipmentTypeId, modelId: this.state.modelId, modelName: this.state.modelName};
        ApiService.addEquipment(vehicleModel)
            .then(res => {
                this.setState({message : 'VehicleModel added successfully.'});
                this.props.history.push('/VehicleModel');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add VehicleModel</h2>
                <form>

                <div className="form-group">
                    <label>Model Id:</label>
                    <input type="modelId" placeholder="modelId" name="modelId" className="form-control" value={this.state.modelId} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Model Name</label>
                    <input type="modelName" placeholder="Vehicle Model Name" name="modelName" className="form-control" value={this.state.modelName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Equipment Type Id:</label>
                    <input type="text" placeholder="Equipment Type ID" name="equipmentTypeId" className="form-control" value={this.state.equipmentTypeId} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveVehicleModel}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddVehicleModel;