package com.bsuir.belitsky.cafe.services.impl;

import  com.bsuir.belitsky.cafe.config.JwtTokenUtil;
import com.bsuir.belitsky.cafe.dto.UserDto;
import com.bsuir.belitsky.cafe.entity.AuthToken;
import com.bsuir.belitsky.cafe.entity.User;
import com.bsuir.belitsky.cafe.entity.UserToken;
import com.bsuir.belitsky.cafe.entity.VerificationToken;
import com.bsuir.belitsky.cafe.factory.Factory;
import com.bsuir.belitsky.cafe.services.AuthenticationService;
import com.bsuir.belitsky.cafe.services.EmailSenderService;
import com.bsuir.belitsky.cafe.services.UserService;
import com.bsuir.belitsky.cafe.services.VerificationTokenService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Calendar;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private UserService userService;
    private JwtTokenUtil jwtTokenUtil;
    private AuthenticationManager authenticationManager;
    private ModelMapper modelMapper;
    private UserDetailsService userDetailsService;
    private EmailSenderService emailSenderService;
    private Factory<VerificationToken> factory;
    private VerificationTokenService verificationTokenService;

    @Autowired
    public AuthenticationServiceImpl(UserService userService, JwtTokenUtil jwtTokenUtil,
                                     AuthenticationManager authenticationManager, ModelMapper modelMapper,
                                     UserDetailsService userDetailsService, EmailSenderService emailSenderService,
                                     Factory<VerificationToken> factory, VerificationTokenService verificationTokenService) {
        this.userService = userService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.authenticationManager = authenticationManager;
        this.modelMapper = modelMapper;
        this.userDetailsService = userDetailsService;
        this.emailSenderService = emailSenderService;
        this.factory = factory;
        this.verificationTokenService = verificationTokenService;
    }

    @Override
    public UserToken<AuthToken> login(User anonymous) throws Exception {
        try {
            User user = userService.getUserByLogin(anonymous.getLogin());
            if(user == null)
                return null;

            String token = getToken(anonymous);
            return new UserToken<>(modelMapper.map(user, UserDto.class), new AuthToken(token));
        } catch (AuthenticationException e){
            e.printStackTrace();
            throw new Exception();
        }
    }

    @Override
    public UserToken<AuthToken> register(User user) throws Exception {
        try {
            User savedUser = userService.saveUser(user);
            String token = getToken(user);
            sendVerificationEmail(savedUser);
            return new UserToken<>(modelMapper.map(savedUser, UserDto.class), new AuthToken(token));
        } catch (AuthenticationException e){
            e.printStackTrace();
            throw new Exception();
        }
    }

    @Override
    public void confirmVerificationEmail(String token) {
        VerificationToken verificationToken = verificationTokenService.findByToken(token);
        if (verificationToken != null) {
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(new Timestamp(calendar.getTime().getTime()));
            if (calendar.getTime().compareTo(verificationToken.getExpiryDate()) < 0) {
                User verificationUser = verificationToken.getUser();
                userService.enableUser(verificationUser.getId());
                verificationTokenService.deleteById(verificationToken.getId());
            }
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

    private void sendVerificationEmail(User user) {
        try {
            VerificationToken verificationToken = factory.getObject();
            verificationToken.setUser(user);
            verificationTokenService.save(verificationToken);
            emailSenderService.sendEmail(verificationToken);
        } catch (MailException e) {
            e.printStackTrace();
        }
    }
}
