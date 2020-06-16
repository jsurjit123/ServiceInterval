package com.CasptoneProject.ServiceInformation.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.CasptoneProject.ServiceInformation.model.VehicleModel;

@Repository
public interface VehicleModelDao extends CrudRepository<VehicleModel, Integer> {

	VehicleModel findByModeleId(Integer modelId);
}
