package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.entity.Role;
import com.bsuir.belitsky.cafe.entity.User;
import com.bsuir.belitsky.cafe.repository.UserRepository;
import com.bsuir.belitsky.cafe.services.RoleService;
import com.bsuir.belitsky.cafe.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private RoleService roleService;
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleService roleService,
                           BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User saveUser(User user) {
        if (userRepository.getUserByEmail(user.getLogin()) == null) {
            User saveUser = new User();
            Set<Role> roles = new HashSet<>();
            roles.add(roleService.getRoleById("0e2da4be-1a7b-43cc-a65b-d32865c40f34"));

            saveUser.setLogin(user.getLogin());
            saveUser.setEmail(user.getEmail());
            saveUser.setPassword(passwordEncoder.encode(user.getPassword()));
            saveUser.setRoles(roles);
            saveUser.setEnabled(false);

            return userRepository.save(saveUser);
        }
        return null;
    }

    @Override
    public void enableUser(String id) {
        if (id != null) {
            User savedUser = userRepository.getUserById(id);
            if (savedUser != null) {
                savedUser.setEnabled(true);
                userRepository.save(savedUser);
            }
        }
    }

    @Override
    public User getUserById(String id) {
        return id != null ? userRepository.getUserById(id) : null;
    }

    @Override
    public User getUserByEmail(String email) {
        return email != null ? userRepository.getUserByEmail(email) : null;
    }

    @Override
    public User getUserByLogin(String login) {
        return login != null ? userRepository.getUserByLogin(login) : null;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
