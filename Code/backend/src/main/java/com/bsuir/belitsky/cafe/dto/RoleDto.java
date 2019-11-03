package com.bsuir.belitsky.cafe.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RoleDto {

    @Null
    private String id;
    @NotNull
    private String role;
    @Null
    private Set<UserDto> users;
}
