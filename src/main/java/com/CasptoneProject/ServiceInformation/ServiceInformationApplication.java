package com.CasptoneProject.ServiceInformation;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.CasptoneProject.ServiceInformation.dao.EquipmentDao;
import com.CasptoneProject.ServiceInformation.dao.UserDao;
import com.CasptoneProject.ServiceInformation.dao.VehicleModelDao;
import com.CasptoneProject.ServiceInformation.model.Equipment;
import com.CasptoneProject.ServiceInformation.model.User;
import com.CasptoneProject.ServiceInformation.model.VehicleModel;


@SpringBootApplication
public class ServiceInformationApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceInformationApplication.class, args);
	}
	
	 @Bean
	    public CommandLineRunner init(UserDao userDao, EquipmentDao equipmentDao, VehicleModelDao vehicleModelDao){
	        return args -> {
	            User user1 = new User();
	            user1.setUsername("author");
	            user1.setPassword("author");
	            //user1.setUserType(1);
	            userDao.save(user1);

	            User user2 = new User();
	            user2.setUsername("customer");
	            user2.setPassword("customer");
	            //user1.setUserType(2);
	            userDao.save(user2);
	            
	            Equipment equipment1 = new Equipment();
	            equipment1.setEquipmentTypeId(1);
	            equipment1.setEquipmentTypeName("Agriculture");	            
	            equipmentDao.save(equipment1);
	            
	            Equipment equipment2 = new Equipment();
	            equipment2.setEquipmentTypeId(2);
	            equipment2.setEquipmentTypeName("Lawn and Garden");	            
	            equipmentDao.save(equipment2);
	            
	            Equipment equipment3 = new Equipment();
	            equipment3.setEquipmentTypeId(3);
	            equipment3.setEquipmentTypeName("Construction");	            
	            equipmentDao.save(equipment3);
	            
	            Equipment equipment4 = new Equipment();
	            equipment4.setEquipmentTypeId(4);
	            equipment4.setEquipmentTypeName("Golf and Sports Turf");	            
	            equipmentDao.save(equipment4);
	            
	            Equipment equipment5 = new Equipment();
	            equipment5.setEquipmentTypeId(5);
	            equipment5.setEquipmentTypeName("Forestry");	            
	            equipmentDao.save(equipment5);
	            
	            VehicleModel vehicleModel1 = new VehicleModel();
	        	vehicleModel1.setModelId(101);
	        	vehicleModel1.setModelName("5075GV");
	        	vehicleModel1.setEquipmentTypeId(1);
	        	vehicleModelDao.save(vehicleModel1);
	        	
	        	VehicleModel vehicleModel2 = new VehicleModel();
	        	vehicleModel2.setModelId(102);
	        	vehicleModel2.setModelName("9370R");
	        	vehicleModel2.setEquipmentTypeId(1);
	        	vehicleModelDao.save(vehicleModel2);
	        	
	        	VehicleModel vehicleModel3 = new VehicleModel();
	        	vehicleModel3.setModelId(201);
	        	vehicleModel3.setModelName("E100");
	        	vehicleModel3.setEquipmentTypeId(2);
	        	vehicleModelDao.save(vehicleModel3);
	        	
	        	VehicleModel vehicleModel4 = new VehicleModel();
	        	vehicleModel4.setModelId(202);
	        	vehicleModel4.setModelName("X330");
	        	vehicleModel4.setEquipmentTypeId(2);
	        	vehicleModelDao.save(vehicleModel4);
	        	
	        	VehicleModel vehicleModel5 = new VehicleModel();
	        	vehicleModel5.setModelId(301);
	        	vehicleModel5.setModelName("260E");
	        	vehicleModel5.setEquipmentTypeId(3);
	        	vehicleModelDao.save(vehicleModel5);
	            	         
	        	VehicleModel vehicleModel7 = new VehicleModel();
	        	vehicleModel7.setModelId(401);
	        	vehicleModel7.setModelName("6080A");
	        	vehicleModel7.setEquipmentTypeId(4);
	        	vehicleModelDao.save(vehicleModel7);
	        	
	        	VehicleModel vehicleModel8 = new VehicleModel();
	        	vehicleModel8.setModelId(402);
	        	vehicleModel8.setModelName("2700 E-Cut Hybrid");
	        	vehicleModel8.setEquipmentTypeId(4);
	        	vehicleModelDao.save(vehicleModel8);
	        	
	        	VehicleModel vehicleModel9 = new VehicleModel();
	        	vehicleModel9.setModelId(501);
	        	vehicleModel9.setModelName("643-II");
	        	vehicleModel9.setEquipmentTypeId(5);
	        	vehicleModelDao.save(vehicleModel9);
	        	
	        	
	        	
	        	
	            
	        };
	    }
	 
	 
	 
	        	
	            /*
	             
	              mysql> select * from EquipmentModel;
+---------+--------------------+-----------+
| MODELID | MODELNAME          | EQPTYPEID |
+---------+--------------------+-----------+
|     101 | 9370R              |         1 | *
|     102 | 9470X              |         1 | *
|     103 | 1023E              |         1 |
|     104 | 3035D              |         1 |
|     105 | 5090R              |         1 |
|     201 | E100               |         2 | *
|     202 | X330               |         2 | *
|     203 | Z525E              |         2 |
|     301 | 260E               |         3 | *
|     302 | 17G                |         3 | *
|     303 | 870G LC            |         3 |
|     401 | 6080A              |         4 | *
|     402 | 2700 E-Cut Hybrid  |         4 | *
|     403 | Progator 2030A GPS |         4 |
|     404 | 7400A TerrainCut   |         4 |
|     501 | 643-II             |         5 | *
|     502 | 803MH              |         5 | *
|     503 | 910G               |         5 |
+---------+--------------------+-----------+
18 rows in set (0.00 sec)

mysql> select * from Equipment;
+-----------+----------------------+
| EQPTYPEID | EQPTYPENAME          |
+-----------+----------------------+
|         1 | Agriculture          |
|         2 | Lawn and Garden      |
|         3 | Construction         |
|         4 | Golf and Sports Turf |
|         5 | Forestry             |
+-----------+----------------------+
5 rows in set (0.00 sec)

mysql> 

	             
	             */
	            
	       
	   
	 
}
