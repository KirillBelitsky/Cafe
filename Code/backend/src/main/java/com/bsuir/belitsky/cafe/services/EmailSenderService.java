package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.entity.VerificationToken;

public interface EmailSenderService {
    void sendEmail(VerificationToken verificationToken);
}
