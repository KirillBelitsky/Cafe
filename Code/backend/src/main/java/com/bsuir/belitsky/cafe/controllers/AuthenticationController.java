package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.UserDto;
import com.bsuir.belitsky.cafe.entity.AuthToken;
import com.bsuir.belitsky.cafe.entity.CaptchaToken;
import com.bsuir.belitsky.cafe.entity.User;
import com.bsuir.belitsky.cafe.entity.UserToken;
import com.bsuir.belitsky.cafe.services.AuthenticationService;
import com.bsuir.belitsky.cafe.services.CaptchaService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/authentication")
public class AuthenticationController {

    private ModelMapper modelMapper;
    private AuthenticationService authenticationService;
    private CaptchaService captchaService;

    @Autowired
    public AuthenticationController(ModelMapper modelMapper, AuthenticationService authenticationService,
                                    CaptchaService captchaService) {
        this.modelMapper = modelMapper;
        this.authenticationService = authenticationService;
        this.captchaService = captchaService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserToken<CaptchaToken> userToken) {
        try {
            captchaService.processResponse(userToken.getToken().getToken());
            return ResponseEntity.ok(authenticationService.login(modelMapper.map(userToken.getUser(), User.class)));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDto userDto) {
        try {
            return ResponseEntity.ok(authenticationService.register(modelMapper.map(userDto, User.class)));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/confirmVerificationEmail")
    public void confirmVerificationEmail(@RequestParam(name = "token") String token) {
        authenticationService.confirmVerificationEmail(token);
    }
}
