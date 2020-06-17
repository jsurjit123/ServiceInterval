package com.CasptoneProject.ServiceInformation.service.impl;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CasptoneProject.ServiceInformation.dao.VehicleModelDao;
import com.CasptoneProject.ServiceInformation.model.Equipment;
import com.CasptoneProject.ServiceInformation.model.VehicleModel;
import com.CasptoneProject.ServiceInformation.model.VehicleModelDto;
import com.CasptoneProject.ServiceInformation.service.VehicleModelService;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service(value = "vehicleModelService")
public class VehicleModelServiceImpl implements VehicleModelService {
	
	@Autowired
	private VehicleModelDao vehicleModelDao;

	public List<VehicleModel> findAll() {
		List<VehicleModel> list = new ArrayList<>();
		vehicleModelDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		vehicleModelDao.deleteById(id);
	}

	@Override
	public VehicleModel findByModelId(Integer modelId) {
		return vehicleModelDao.findByModelId(modelId);
	}

	@Override
	public VehicleModel findById(int id) {
		Optional<VehicleModel> optionalVehicleModel = vehicleModelDao.findById(id);
		return optionalVehicleModel.isPresent() ? optionalVehicleModel.get() : null;
	}

    @Override
    public VehicleModelDto update(VehicleModelDto vehicleModelDto) {
        VehicleModel vehicleModel = findById(vehicleModelDto.getId());
        if(vehicleModel != null) {
            BeanUtils.copyProperties(vehicleModelDto, vehicleModel, "modelName", "equipmentTypeId");
            vehicleModelDao.save(vehicleModel);
        }
        return vehicleModelDto;
    }

    @Override
    public VehicleModel save(VehicleModelDto vehicleModelDto) {
	    VehicleModel newVehicleModel = new VehicleModel();

        return vehicleModelDao.save(newVehicleModel);
    }
}
