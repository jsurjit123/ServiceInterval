package com.CasptoneProject.ServiceInformation.service;

import com.CasptoneProject.ServiceInformation.model.User;
import com.CasptoneProject.ServiceInformation.model.UserDto;

import java.util.List;

public interface UserService {

    User save(UserDto user);
    List<User> findAll();
    void delete(int id);

    User findOne(String username);

    User findById(int id);

    UserDto update(UserDto userDto);
}
