package com.CasptoneProject.ServiceInformation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CasptoneProject.ServiceInformation.model.ApiResponse;
import com.CasptoneProject.ServiceInformation.model.Equipment;
import com.CasptoneProject.ServiceInformation.model.EquipmentDto;
import com.CasptoneProject.ServiceInformation.service.EquipmentService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/equipment")
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;
    
    @PostMapping
    public ApiResponse<Equipment> saveEquipment(@RequestBody EquipmentDto equipmentDto){
        return new ApiResponse<>(HttpStatus.OK.value(), "Equipment saved successfully.", equipmentService.save(equipmentDto));
    }

    @GetMapping
    public ApiResponse<List<Equipment>> listUser(){
        return new ApiResponse<>(HttpStatus.OK.value(), "Equipment list fetched successfully.", equipmentService.findAll());
    }
    
    @GetMapping("/{eqpTypeId}")
    public ApiResponse<Equipment> getOne(@PathVariable Integer eqpTypeId){
        return new ApiResponse<>(HttpStatus.OK.value(), "Equipment fetched successfully.", equipmentService.findByEquipmentTypeId(eqpTypeId));
    }

    @GetMapping("/{id}")
    public ApiResponse<Equipment> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "Equipment fetched successfully.", equipmentService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<EquipmentDto> update(@RequestBody EquipmentDto equipmentDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "Equipment updated successfully.", equipmentService.update(equipmentDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
    	equipmentService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }
}