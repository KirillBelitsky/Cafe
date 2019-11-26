package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.entity.SalesOrder;
import com.bsuir.belitsky.cafe.repository.SalesOrderRepository;
import com.bsuir.belitsky.cafe.services.SalesOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalesOrderServiceImpl implements SalesOrderService {

    private SalesOrderRepository salesOrderRepository;

    @Autowired
    public SalesOrderServiceImpl(SalesOrderRepository salesOrderRepository) {
        this.salesOrderRepository = salesOrderRepository;
    }

    @Override
    public SalesOrder saveSalesOrder(SalesOrder salesOrder) {
        return salesOrderRepository.save(salesOrder);
    }
}
