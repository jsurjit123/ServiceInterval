package com.CasptoneProject.ServiceInformation.dao;

import com.CasptoneProject.ServiceInformation.model.Equipment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentDao extends CrudRepository<Equipment, Integer> {

	Equipment findByEquipmentTypeId(Integer eqpTypeId);
}
