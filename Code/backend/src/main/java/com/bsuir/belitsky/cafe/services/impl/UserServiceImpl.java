package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.models.User;
import com.bsuir.belitsky.cafe.repository.UserRepository;
import com.bsuir.belitsky.cafe.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return null;
    }

    @Override
    public User getUserById(String id) {
        if(id != null) {
            return userRepository.getUserById(id);
        }

        return null;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
