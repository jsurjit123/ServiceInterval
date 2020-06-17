import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddEquipment extends Component{

    constructor(props){
        super(props);
        this.state ={
            equipmentTypeId: '',
            equipmentTypeName: '',
        }
        this.saveEquipment = this.saveEquipment.bind(this);
    }

    saveEquipment = (e) => {
        e.preventDefault();
        let equipment = {equipmentTypeId: this.state.equipmentTypeId, equipmentTypeName: this.state.equipmentTypeName};
        ApiService.addEquipment(equipment)
            .then(res => {
                this.setState({message : 'equipment added successfully.'});
                this.props.history.push('/equipment');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Equipment</h2>
                <form>
                <div className="form-group">
                    <label>Equipment Type Id:</label>
                    <input type="text" placeholder="Equipment Type ID" name="equipmentTypeId" className="form-control" value={this.state.equipmentTypeId} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Equipment Type Name:</label>
                    <input type="equipmentTypeName" placeholder="Equipment Type Name" name="equipmentTypeName" className="form-control" value={this.state.equipmentTypeName} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveEquipment}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddEquipment;