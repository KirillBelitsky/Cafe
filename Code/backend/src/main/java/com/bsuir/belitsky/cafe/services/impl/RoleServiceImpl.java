package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.models.Role;
import com.bsuir.belitsky.cafe.repository.RoleRepository;
import com.bsuir.belitsky.cafe.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

    private RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role saveRole(Role role) {
        if(role != null && roleRepository.getRoleById(role.getId()) == null)
            return roleRepository.save(role);
        else return null;
    }

    @Override
    public Role getRoleById(String id) {
        if(id != null){
            return roleRepository.getRoleById(id);
        }

        return null;
    }
}
