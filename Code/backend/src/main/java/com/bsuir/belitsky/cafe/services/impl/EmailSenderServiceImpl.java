package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.entity.VerificationToken;
import com.bsuir.belitsky.cafe.factory.Factory;
import com.bsuir.belitsky.cafe.services.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderServiceImpl implements EmailSenderService {

    private JavaMailSender mailSender;
    private Factory<SimpleMailMessage> factory;

    @Autowired
    public EmailSenderServiceImpl(JavaMailSender mailSender, Factory<SimpleMailMessage> messageFactory) {
        this.mailSender = mailSender;
        this.factory = messageFactory;
    }

    @Override
    public void sendEmail(VerificationToken verificationToken) throws MailException {
        SimpleMailMessage message = createVerificationEmail(verificationToken);
        System.out.println(message);
        mailSender.send(message);
    }

    private SimpleMailMessage createVerificationEmail(VerificationToken token) {
        SimpleMailMessage message = factory.getObject();
        message.setTo(token.getUser().getEmail());
        StringBuilder stringBuilder = new StringBuilder(message.getText());
        stringBuilder.insert(81, token.getToken());
        message.setText(stringBuilder.toString());
        return message;
    }
}
