package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.UserDto;
import com.bsuir.belitsky.cafe.models.User;
import com.bsuir.belitsky.cafe.models.UserToken;
import com.bsuir.belitsky.cafe.services.AuthenticationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/authentication")
public class AuthenticationController {

    private ModelMapper modelMapper;
    private AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(ModelMapper modelMapper, AuthenticationService authenticationService) {
        this.modelMapper = modelMapper;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public UserToken login(@RequestBody UserDto userDto) {
        return userDto != null ? authenticationService.login(modelMapper.map(userDto, User.class)) : null;
    }

    @PostMapping("/register")
    public UserToken register(@RequestBody UserDto userDto) {
        return userDto != null ? authenticationService.register(modelMapper.map(userDto, User.class)) : null;
    }
}
