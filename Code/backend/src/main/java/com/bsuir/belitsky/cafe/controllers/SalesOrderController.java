package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.SalesOrderDto;
import com.bsuir.belitsky.cafe.entity.SalesOrder;
import com.bsuir.belitsky.cafe.services.SalesOrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/salesorder")
public class SalesOrderController {

    private SalesOrderService salesOrderService;
    private ModelMapper modelMapper;

    @Autowired
    public SalesOrderController(SalesOrderService salesOrderService, ModelMapper modelMapper) {
        this.salesOrderService = salesOrderService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public SalesOrderDto saveSalesOrder(@RequestBody SalesOrderDto salesOrderDto) {
        if(salesOrderDto != null) {
            SalesOrder salesOrder = salesOrderService.saveSalesOrder(
                    modelMapper.map(salesOrderDto, SalesOrder.class));
            return salesOrder != null ? modelMapper.map(salesOrder, SalesOrderDto.class) : null;
        }
        return null;
    }
}
