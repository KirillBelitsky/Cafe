package com.bsuir.belitsky.cafe.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@NoArgsConstructor
@Setter
@Getter
public class MenuCategoryDto {

    @Null
    private String id;

    @NotNull
    private String name;
}
