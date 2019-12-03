package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.entity.Product;
import com.bsuir.belitsky.cafe.entity.SalesOrder;
import com.bsuir.belitsky.cafe.entity.User;
import com.bsuir.belitsky.cafe.repository.ProductRepository;
import com.bsuir.belitsky.cafe.repository.SalesOrderRepository;
import com.bsuir.belitsky.cafe.repository.UserRepository;
import com.bsuir.belitsky.cafe.services.ProductService;
import com.bsuir.belitsky.cafe.services.SalesOrderService;
import com.bsuir.belitsky.cafe.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class SalesOrderServiceImpl implements SalesOrderService {

    private SalesOrderRepository salesOrderRepository;
    private UserService userService;
    private ProductService productService;

    @Autowired
    public SalesOrderServiceImpl(SalesOrderRepository salesOrderRepository,
                                 UserService userService, ProductService productService) {
        this.salesOrderRepository = salesOrderRepository;
        this.userService = userService;
        this.productService = productService;
    }

    @Override
    public SalesOrder saveSalesOrder(SalesOrder salesOrder) {
        return salesOrderRepository.save(salesOrder);
    }

    @Override
    public SalesOrder getCurrentSalesOrder() {
        String login = ((UserDetails)SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal()).getUsername();
        SalesOrder so = salesOrderRepository.findSalesOrderByOwnerLoginAndSubmittedFalse(login);
        if (so == null) {
            SalesOrder salesOrder = new SalesOrder();
            salesOrder.setSubmitted(false);
            User owner = userService.getUserByLogin(login);
            salesOrder.setOwner(owner);

            return salesOrderRepository.save(salesOrder);
        }
        return so;
    }

    @Override
    public SalesOrder submitSalesOrder(SalesOrder salesOrder) {
        String login = ((UserDetails)SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal()).getUsername();

        salesOrder.setSubmitted(true);
        salesOrderRepository.save(salesOrder);

        SalesOrder so = new SalesOrder();
        so.setSubmitted(false);
        User owner = userService.getUserByLogin(login);
        so.setOwner(owner);

        return salesOrderRepository.save(so);
    }

    @Override
    public SalesOrder addProductToSalesOrder(String productId) {
        if(productId != null) {
            Product product = productService.getProductById(productId);
            if(product != null) {
                SalesOrder salesOrder = getCurrentSalesOrder();
                salesOrder.setPrice(salesOrder.getPrice() + product.getPrice());
                salesOrder.getProducts().add(product);
                return salesOrderRepository.save(salesOrder);
            }
            return null;
        }
        return null;
    }

    @Override
    public SalesOrder removeProductInSalesOrder(String productId) {
        if(productId != null) {
            Product product = productService.getProductById(productId);
            if(product != null) {
                SalesOrder salesOrder = getCurrentSalesOrder();
                salesOrder.getProducts().remove(product);
                salesOrder.setPrice(salesOrder.getPrice() - product.getPrice());
                return salesOrderRepository.save(salesOrder);
            }
            return null;
        }
        return null;
    }
}
