package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.models.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    User saveUser(User user);
    User getUserById(String id);
    List<User> findAll();
    User getUserByEmail(String email);
    User getUserByLogin(String login);
}
