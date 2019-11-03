package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.RoleDto;
import com.bsuir.belitsky.cafe.models.Role;
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
        System.out.println("kyky");
        return modelMapper.map(modelMapper.map(role, Role.class), RoleDto.class);
    }

    @GetMapping("/{id}")
    public RoleDto getRoleById(@PathVariable(name = "id") String id) {
        return modelMapper.map(roleService.getRoleById(id), RoleDto.class);
    }
}
