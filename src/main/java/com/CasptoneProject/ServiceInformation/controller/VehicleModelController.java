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
import com.CasptoneProject.ServiceInformation.model.VehicleModel;
import com.CasptoneProject.ServiceInformation.model.VehicleModelDto;
import com.CasptoneProject.ServiceInformation.service.VehicleModelService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/VehicleModel")
public class VehicleModelController {

    @Autowired
    private VehicleModelService vehicleModelService;
    
    @PostMapping
    public ApiResponse<VehicleModel> saveVehicleModel(@RequestBody VehicleModelDto vehicleModelDto){
        return new ApiResponse<>(HttpStatus.OK.value(), "VehicleModel saved successfully.", vehicleModelService.save(vehicleModelDto));
    }

    @GetMapping
    public ApiResponse<List<VehicleModel>> listUser(){
        return new ApiResponse<>(HttpStatus.OK.value(), "VehicleModel list fetched successfully.", vehicleModelService.findAll());
    }
    
    @GetMapping("/{modelId}")
    public ApiResponse<VehicleModel> getOne(@PathVariable Integer modelId){
        return new ApiResponse<>(HttpStatus.OK.value(), "VehicleModel fetched successfully.", vehicleModelService.findByModelId(modelId));
    }

//    @GetMapping("/{modelId}")
//    public ApiResponse<VehicleModel> getOne(@PathVariable int modelId){
//        return new ApiResponse<>(HttpStatus.OK.value(), "VehicleModel fetched successfully.", vehicleModelService.findById(modelId));
//    }

    @PutMapping("/{modelId}")
    public ApiResponse<VehicleModelDto> update(@RequestBody VehicleModelDto vehicleModelsDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "VehicleModels updated successfully.", vehicleModelService.update(vehicleModelsDto));
    }

    @DeleteMapping("/{modelId}")
    public ApiResponse<Void> delete(@PathVariable int modelId) {
    	vehicleModelService.delete(modelId);
        return new ApiResponse<>(HttpStatus.OK.value(), "Vehicle Models deleted successfully.", null);
    }
}