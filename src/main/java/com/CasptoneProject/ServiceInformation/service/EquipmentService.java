package com.CasptoneProject.ServiceInformation.service;

import com.CasptoneProject.ServiceInformation.model.Equipment;
import com.CasptoneProject.ServiceInformation.model.EquipmentDto;

import java.util.List;

public interface EquipmentService {

	Equipment save(EquipmentDto equipmentDto);
    List<Equipment> findAll();
    void delete(int id);

    Equipment findById(int id);
    
    Equipment findByEquipmentTypeId(Integer eqpTypeId);

    EquipmentDto update(EquipmentDto equipmentDto);
}
