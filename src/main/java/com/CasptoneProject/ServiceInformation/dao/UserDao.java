package com.CasptoneProject.ServiceInformation.dao;

import com.CasptoneProject.ServiceInformation.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User, Integer> {

    User findByUsername(String username);
}
