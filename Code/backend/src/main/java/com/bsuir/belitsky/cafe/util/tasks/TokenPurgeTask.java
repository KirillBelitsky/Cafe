package com.bsuir.belitsky.cafe.util.tasks;

import com.bsuir.belitsky.cafe.repository.VerificationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Date;

@Service
@Transactional
public class TokenPurgeTask {

    private VerificationTokenRepository verificationTokenRepository;

    @Autowired
    public TokenPurgeTask(VerificationTokenRepository verificationTokenRepository) {
        this.verificationTokenRepository = verificationTokenRepository;
    }

    @Scheduled(cron = "${purge.cron.expression}")
    public void purgeExpired() {
        Date now = Date.from(Instant.now());
        System.out.println(now + "" + "111");
        verificationTokenRepository.deleteAllByExpiryDateIsLessThan(now);
    }
}
