package com.bsuir.belitsky.cafe.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class SalesOrderDto {

    @Null
    private String id;

    @NotNull
    private List<ProductDto> products;

    @NotNull
    private UserDto owner;

    @NotNull
    private double price;

    @NotNull
    private boolean submitted;
}
