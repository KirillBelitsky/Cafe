package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.entity.VerificationToken;

public interface VerificationTokenService {
    VerificationToken save(VerificationToken token);
    VerificationToken findByToken(String token);
    void deleteById(String id);
}
