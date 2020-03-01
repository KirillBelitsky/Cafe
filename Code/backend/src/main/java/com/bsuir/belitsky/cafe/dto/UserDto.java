package com.bsuir.belitsky.cafe.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

    @Null
    private String id;

    @NotNull
    private String login;

    @Null
    private String email;

    @NotNull
    private String password;

    @NotNull
    private boolean isEnabled;

}
