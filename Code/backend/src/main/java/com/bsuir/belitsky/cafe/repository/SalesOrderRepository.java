package com.bsuir.belitsky.cafe.repository;

import com.bsuir.belitsky.cafe.entity.SalesOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesOrderRepository extends JpaRepository<SalesOrder, String> {
    SalesOrder findSalesOrderByOwnerLoginAndSubmittedFalse(String login);
}
