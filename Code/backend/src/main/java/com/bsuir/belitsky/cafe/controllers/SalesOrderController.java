package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.SalesOrderDto;
import com.bsuir.belitsky.cafe.entity.SalesOrder;
import com.bsuir.belitsky.cafe.services.SalesOrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/submit")
    public SalesOrderDto submitSalesOrder(@RequestBody SalesOrderDto salesOrderDto) {
        if(salesOrderDto != null) {
            SalesOrder salesOrder = salesOrderService.submitSalesOrder(
                    modelMapper.map(salesOrderDto, SalesOrder.class));
            return salesOrder != null ? modelMapper.map(salesOrder, SalesOrderDto.class) : null;
        }
        return null;
    }

    @GetMapping("/addProduct/{id}")
    public SalesOrderDto addProductToSalesOrder(@PathVariable("id") String productId) {
        SalesOrder salesOrder = salesOrderService.addProductToSalesOrder(productId);
        return salesOrder != null ? modelMapper.map(salesOrder, SalesOrderDto.class) : null;
    }

    @GetMapping("/removeProduct/{id}")
    public SalesOrderDto removeProductInSalesOrder(@PathVariable("id") String productId) {
        SalesOrder salesOrder = salesOrderService.removeProductInSalesOrder(productId);
        return salesOrder != null ? modelMapper.map(salesOrder, SalesOrderDto.class) : null;
    }

    @GetMapping("/getCurrentSO")
    public SalesOrderDto getCurrentSalesOrder() {
        SalesOrder salesOrder = salesOrderService.getCurrentSalesOrder();
        return salesOrder != null ? modelMapper.map(salesOrder, SalesOrderDto.class) : null;
    }
}
