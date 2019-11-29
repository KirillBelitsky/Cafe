package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.entity.SalesOrder;

public interface SalesOrderService {
    SalesOrder saveSalesOrder(SalesOrder salesOrder);
    SalesOrder getCurrentSalesOrder();
    SalesOrder addProductToSalesOrder(String productId);
}
