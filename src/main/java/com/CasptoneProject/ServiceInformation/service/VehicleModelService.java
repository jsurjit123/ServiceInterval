package com.CasptoneProject.ServiceInformation.service;

import com.CasptoneProject.ServiceInformation.model.VehicleModel;
import com.CasptoneProject.ServiceInformation.model.VehicleModelDto;

import java.util.List;

public interface VehicleModelService {

	VehicleModel save(VehicleModelDto vehicleModelDto);
    List<VehicleModel> findAll();
    void delete(int id);

    VehicleModel findById(int id);
    
    VehicleModel findByModelId(Integer modelId);

    VehicleModelDto update(VehicleModelDto vehicleModelDto);
}
