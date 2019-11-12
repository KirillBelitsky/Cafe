package com.bsuir.belitsky.cafe.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@NoArgsConstructor
@Getter
@Setter
public class ProductDto {
    @Null
    private String id;
    @NotNull
    private String name;
    @NotNull
    private double price;
    @NotNull
    private double mass;
    @NotNull
    private String description;
}
