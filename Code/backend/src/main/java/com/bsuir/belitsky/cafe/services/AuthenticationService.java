package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.entity.AuthToken;
import com.bsuir.belitsky.cafe.entity.User;
import com.bsuir.belitsky.cafe.entity.UserToken;

public interface AuthenticationService {
    UserToken<AuthToken> login(User user) throws Exception;
    UserToken<AuthToken> register(User user) throws  Exception;
    void confirmVerificationEmail(String token);
}
