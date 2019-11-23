package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.models.User;
import com.bsuir.belitsky.cafe.models.UserToken;

public interface AuthenticationService {

    UserToken login(User user);
    UserToken register(User user);
}
