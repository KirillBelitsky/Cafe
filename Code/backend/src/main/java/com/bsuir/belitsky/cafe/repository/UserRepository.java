package com.bsuir.belitsky.cafe.repository;

import com.bsuir.belitsky.cafe.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User getUserById(String id);
    List<User> findAll();
    User getUserByEmail(String email);
    User getUserByLogin(String login);
}
