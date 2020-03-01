package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.entity.User;
import com.bsuir.belitsky.cafe.entity.UserToken;

public interface AuthenticationService {
    UserToken login(User user);
    UserToken register(User user);
    void confirmVerificationEmail(String token);
}
