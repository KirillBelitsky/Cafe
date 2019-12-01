package com.bsuir.belitsky.cafe.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@NoArgsConstructor
@Getter
@Setter
public class CommentDto {

    @Null
    private String id;

    @NotNull
    private String comment;

    @NotNull
    private UserDto owner;

    @NotNull
    private ProductDto product;

    @Null
    private String date;

    @Override
    public String toString() {
        return "CommentDto{" +
                "id='" + id + '\'' +
                ", comment='" + comment + '\'' +
                ", owner=" + owner +
                ", productDto=" + product +
                '}';
    }
}
