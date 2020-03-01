package com.bsuir.belitsky.cafe.factory.impl;

import com.bsuir.belitsky.cafe.factory.Factory;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;


import static com.bsuir.belitsky.cafe.config.SecurityConstants.EMAIL_USERNAME;

@Service
public class SimpleMailMessageFactory implements Factory<SimpleMailMessage> {

    @Override
    public SimpleMailMessage getObject() {
        SimpleMailMessage message = new SimpleMailMessage();
        String url = "<a href=\"http://localhost:8080/api/authentication/confirmVerificationEmail?token=\">" +
                "Нажми для подтверждения!</a>";

        message.setSubject("Verification message!");
        message.setText(url);
        message.setFrom(EMAIL_USERNAME);

        return message;
    }
}
