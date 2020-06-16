package com.CasptoneProject.ServiceInformation.service.impl;

import com.CasptoneProject.ServiceInformation.dao.EquipmentDao;
import com.CasptoneProject.ServiceInformation.model.Equipment;
import com.CasptoneProject.ServiceInformation.model.EquipmentDto;
import com.CasptoneProject.ServiceInformation.service.EquipmentService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service(value = "equipmentService")
public class EquipmentServiceImpl implements EquipmentService {
	
	@Autowired
	private EquipmentDao equipmentDao;

	public List<Equipment> findAll() {
		List<Equipment> list = new ArrayList<>();
		equipmentDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		equipmentDao.deleteById(id);
	}

	@Override
	public Equipment findByEquipmentTypeId(Integer eqpTypeId) {
		return equipmentDao.findByEquipmentTypeId(eqpTypeId);
	}

	@Override
	public Equipment findById(int id) {
		Optional<Equipment> optionalEquipment = equipmentDao.findById(id);
		return optionalEquipment.isPresent() ? optionalEquipment.get() : null;
	}

    @Override
    public EquipmentDto update(EquipmentDto userDto) {
        Equipment equipment = findById(userDto.getId());
        if(equipment != null) {
            BeanUtils.copyProperties(userDto, equipment, "password", "username");
            equipmentDao.save(equipment);
        }
        return userDto;
    }

    @Override
    public Equipment save(EquipmentDto equipmentDao) {
	    Equipment newEquipment = new Equipment();
	    newEquipment.setEquipmentTypeId(equipmentDao.getEquipmentTypeId());
	    newEquipment.setEquipmentTypeName(equipmentDao.getEquipmentTypeName());
        return equipmentDao.save(newEquipment);
    }
}
