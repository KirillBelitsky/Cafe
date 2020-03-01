package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.entity.VerificationToken;
import com.bsuir.belitsky.cafe.repository.VerificationTokenRepository;
import com.bsuir.belitsky.cafe.services.VerificationTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VerificationTokenImpl implements VerificationTokenService {

    private VerificationTokenRepository repository;

    @Autowired
    public VerificationTokenImpl(VerificationTokenRepository repository) {
        this.repository = repository;
    }

    @Override
    public VerificationToken save(VerificationToken token) {
        return token != null ? repository.save(token) : null;
    }

    @Override
    public void deleteById(String id) {
        if (id != null) {
            repository.deleteById(id);
        }
    }

    @Override
    public VerificationToken findByToken(String token) {
        return repository.findByToken(token);
    }
}
