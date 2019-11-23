package com.bsuir.belitsky.cafe.repository;

import com.bsuir.belitsky.cafe.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, String> {
    Role getRoleById(String id);
    Role getRoleByRole(String role);
}
