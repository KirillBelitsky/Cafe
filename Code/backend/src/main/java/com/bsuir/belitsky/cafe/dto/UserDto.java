package com.bsuir.belitsky.cafe.dto;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

    @Null
    private String id;

    @NotNull
    private String login;

    @NotNull
    private String email;

    @NotNull
    private String password;

    @Null
    private Set<RoleDto> roles;
}
