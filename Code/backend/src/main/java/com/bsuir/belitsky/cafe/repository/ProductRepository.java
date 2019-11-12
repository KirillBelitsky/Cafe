package com.bsuir.belitsky.cafe.repository;

import com.bsuir.belitsky.cafe.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    Product getProductById(String id);
}
