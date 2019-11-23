package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.config.JwtTokenUtil;
import com.bsuir.belitsky.cafe.dto.UserDto;
import com.bsuir.belitsky.cafe.models.AuthToken;
import com.bsuir.belitsky.cafe.models.User;
import com.bsuir.belitsky.cafe.models.UserToken;
import com.bsuir.belitsky.cafe.services.AuthenticationService;
import com.bsuir.belitsky.cafe.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private UserService userService;
    private JwtTokenUtil jwtTokenUtil;
    private AuthenticationManager authenticationManager;
    private ModelMapper modelMapper;
    private UserDetailsService userDetailsService;

    @Autowired
    public AuthenticationServiceImpl(UserService userService, JwtTokenUtil jwtTokenUtil,
                                     AuthenticationManager authenticationManager, ModelMapper modelMapper,
                                     UserDetailsService userDetailsService) {
        this.userService = userService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.authenticationManager = authenticationManager;
        this.modelMapper = modelMapper;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public UserToken login(User anonymous) {
        try {
            User user = userService.getUserByLogin(anonymous.getLogin());
            if(user == null)
                return null;

            String token = getToken(anonymous);
            return new UserToken(modelMapper.map(user, UserDto.class), new AuthToken(token));
        }catch (AuthenticationException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public UserToken register(User user) {
        try {
            User savedUser = userService.saveUser(user);
            String token = getToken(user);
            return new UserToken(modelMapper.map(savedUser, UserDto.class), new AuthToken(token));
        }catch (AuthenticationException e){
            e.printStackTrace();
            return null;
        }
    }

    private String getToken(User user) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(user.getLogin());
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, user.getPassword(), userDetails.getAuthorities());

        authenticationManager.authenticate(authenticationToken);
        if(authenticationToken.isAuthenticated())
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);

        return jwtTokenUtil.generateToken(authenticationToken);
    }
}
