package com.bsuir.belitsky.cafe.models;

import com.bsuir.belitsky.cafe.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserToken {
    private UserDto user;
    private AuthToken token;
}
