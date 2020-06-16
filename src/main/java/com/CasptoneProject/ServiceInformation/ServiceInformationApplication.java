package com.CasptoneProject.ServiceInformation;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.CasptoneProject.ServiceInformation.dao.UserDao;
import com.CasptoneProject.ServiceInformation.model.User;


@SpringBootApplication
public class ServiceInformationApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceInformationApplication.class, args);
	}
	
	 @Bean
	    public CommandLineRunner init(UserDao userDao){
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
	        };
	    }

}
