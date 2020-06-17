import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8183/users';
const EQUIPMENT_API_BASE_URL = 'http://localhost:8183/equipment';
const VEHICLEMODELS_API_BASE_URL = 'http://localhost:8183/VehicleModel';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

    fetchEquipments() {
        return axios.get(EQUIPMENT_API_BASE_URL);
    }

    fetchEquipmentById(equipmentTypeId) {
        return axios.get(EQUIPMENT_API_BASE_URL + '/' + equipmentTypeId);
    }

    deleteEquipment(equipmentTypeId) {
        return axios.delete(EQUIPMENT_API_BASE_URL + '/' + equipmentTypeId);
    }

    addEquipment(equipment) {
        return axios.post("" + EQUIPMENT_API_BASE_URL, equipment);
    }

    editEquipment(equipment) {
        return axios.put(EQUIPMENT_API_BASE_URL + '/' + equipment.equipmentTypeId, equipment);
    }


    fetchVehicleModels() {
        return axios.get(VEHICLEMODELS_API_BASE_URL);
    }

    fetchVehicleModelById(modelId) {
        return axios.get(VEHICLEMODELS_API_BASE_URL + '/' + modelId);
    }

    deleteVehicleModel(modelId) {
        return axios.delete(VEHICLEMODELS_API_BASE_URL + '/' + modelId);
    }

    addVehicleModel(vehicleModel) {
        return axios.post("" + VEHICLEMODELS_API_BASE_URL, vehicleModel);
    }

    editVehicleModel(vehicleModel) {
        return axios.put(VEHICLEMODELS_API_BASE_URL + '/' + vehicleModel.modelId, vehicleModel);
    }
}

export default new ApiService();