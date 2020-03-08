package com.bsuir.belitsky.cafe.repository;

import com.bsuir.belitsky.cafe.entity.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, String> {
    VerificationToken findByToken(String token);
    void deleteById(String id);
    void deleteAllByExpiryDateIsLessThan(Date date);
}
