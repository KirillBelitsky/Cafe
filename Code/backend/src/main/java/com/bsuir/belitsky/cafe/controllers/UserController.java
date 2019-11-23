package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.UserDto;
import com.bsuir.belitsky.cafe.entity.User;
import com.bsuir.belitsky.cafe.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;
    private ModelMapper modelMapper;

    @Autowired
    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public UserDto saveUser(@RequestBody UserDto userDto) {
        if(userDto != null) {
            User user = userService.saveUser(modelMapper.map(userDto, User.class));
            return user != null ? modelMapper.map(user, UserDto.class) : null;
        }
        return null;
    }

    @GetMapping("/{id}")
    public UserDto getUserById(@PathVariable("id") String id) {
        User user = userService.getUserById(id);
        return user != null ? modelMapper.map(user, UserDto.class) : null;
    }
}
