import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditEquipment extends Component {

    constructor(props){
        super(props);
        this.state ={
            equipmentTypeId: '',
            equipmentTypeName: '',
        }
        
        this.saveEquipment = this.saveEquipment.bind(this);
        this.loadEquipment = this.loadEquipment.bind(this);
    }

    componentDidMount() {
        this.loadEquipment();
    }

    loadEquipment() {
        ApiService.fetchEquipmentById(window.localStorage.getItem("equipmentTypeId"))
            .then((res) => {
                let equipment = res.data.result;
                this.setState({
                    equipmentTypeId: equipment.equipmentTypeId,
                    equipmentTypeName: equipment.equipmentTypeName,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveEquipment = (e) => {
        e.preventDefault();
        let equipment = {equipmentTypeId: this.state.equipmentTypeId, equipmentTypeName: this.state.equipmentTypeName};
        ApiService.editEquipment(equipment)
            .then(res => {
                this.setState({message : 'equipment added successfully.'});
                this.props.history.push('/equipment');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Equipment</h2>
                <form>

                    <div className="form-group">
                        <label>Equipment Type ID</label>
                        <input type="text" placeholder="equipmentTypeId" name="equipmentTypeId" className="form-control" readonly="true" defaultValue={this.state.equipmentTypeId}/>
                    </div>

                    <div className="form-group">
                        <label>Equipment Type Name</label>
                        <input placeholder="equipmentTypeName" name="equipmentTypeName" className="form-control" value={this.state.equipmentTypeName} onChange={this.onChange}/>
                    </div>

                   
                    <button className="btn btn-success" onClick={this.saveEquipment}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditEquipment;