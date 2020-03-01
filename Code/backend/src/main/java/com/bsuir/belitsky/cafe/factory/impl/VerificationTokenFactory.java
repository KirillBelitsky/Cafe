package com.bsuir.belitsky.cafe.factory.impl;

import com.bsuir.belitsky.cafe.entity.VerificationToken;
import com.bsuir.belitsky.cafe.factory.Factory;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.UUID;

import static com.bsuir.belitsky.cafe.config.SecurityConstants.VERIFICATION_TOKEN_EXPIRATION;

@Service
public class VerificationTokenFactory implements Factory<VerificationToken> {

    @Override
    public VerificationToken getObject() {
        VerificationToken token = new VerificationToken();
        Calendar calendar = Calendar.getInstance();

        calendar.setTime(new Timestamp(calendar.getTime().getTime()));
        token.setCreatedDate(calendar.getTime());
        calendar.add(Calendar.MINUTE, VERIFICATION_TOKEN_EXPIRATION);
        token.setExpiryDate(calendar.getTime());
        token.setToken(UUID.randomUUID().toString());

        return token;
    }
}
