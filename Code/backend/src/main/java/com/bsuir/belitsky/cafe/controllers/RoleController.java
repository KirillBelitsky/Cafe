package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.RoleDto;
import com.bsuir.belitsky.cafe.entity.Role;
import com.bsuir.belitsky.cafe.services.RoleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/roles")
public class RoleController {

    private RoleService roleService;
    private ModelMapper modelMapper;

    @Autowired
    public RoleController(RoleService roleService, ModelMapper modelMapper) {
        this.roleService = roleService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public RoleDto saveRole(@RequestBody RoleDto role) {
        if(role != null) {
            Role savedRole = roleService.saveRole(modelMapper.map(role, Role.class));
            if(savedRole != null)
                return modelMapper.map(savedRole, RoleDto.class);

        }
        return null;
    }

    @GetMapping("/{id}")
    public RoleDto getRoleById(@PathVariable(name = "id") String id) {
        Role role = roleService.getRoleById(id);
        return role != null ? modelMapper.map(role, RoleDto.class) : null;
    }
}
