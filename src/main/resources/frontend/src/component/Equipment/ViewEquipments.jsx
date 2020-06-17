import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ViewEquipments extends Component {

    constructor(props) {
        super(props)
        this.state = {
            equipments: [],
            message: null
        }
        this.deleteEquipment = this.deleteEquipment.bind(this);
        this.editEquipment = this.editEquipment.bind(this);
        this.addEquipment = this.addEquipment.bind(this);
        this.reloadEquipmentList = this.reloadEquipmentList.bind(this);
    }

    componentDidMount() {
        this.reloadEquipmentList();
    }

    reloadEquipmentList() {
        ApiService.fetchEquipments()
            .then((res) => {
                this.setState({equipments: res.data.result})
            });
    }

    deleteEquipment(equipmentTypeId) {
        ApiService.deleteEquipment(equipmentTypeId)
           .then(res => {
               this.setState({message : 'Equipment deleted successfully.'});
               this.reloadEquipmentList();
               //this.setState({equipments: this.state.equipments.filter(equipment => equipments.equipmentTypeId !== equipmentTypeId)});
           })

    }

    editEquipment(equipmentTypeId) {
        window.localStorage.setItem("equipmentTypeId", equipmentTypeId);
        this.props.history.push('/edit-equipment');
    }

    addEquipment() {
        window.localStorage.removeItem("equipmentTypeId");
        this.props.history.push('/add-equipment');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Equipment Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addEquipment()}> Add Equipment</button>
                <table className="table table-striped">
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
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteEquipment(equipment.equipmentTypeId)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editEquipment(equipment.equipmentTypeId)} style={{marginLeft: '20px'}}> Edit</button>
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

export default ViewEquipments;