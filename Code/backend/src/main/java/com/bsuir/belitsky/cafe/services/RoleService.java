package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.entity.Role;

public interface RoleService {
    Role saveRole(Role role);
    Role getRoleById(String id);
}
