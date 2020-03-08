package com.bsuir.belitsky.cafe.entity;

import com.bsuir.belitsky.cafe.dto.UserDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserToken<T> {

    private UserDto user;
    private T token;

    @Override
    public String toString() {
        return "UserToken{" +
                "user=" + user +
                ", token=" + token +
                '}';
    }
}
