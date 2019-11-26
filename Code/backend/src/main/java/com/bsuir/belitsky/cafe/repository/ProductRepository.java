package com.bsuir.belitsky.cafe.repository;

import com.bsuir.belitsky.cafe.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    Product getProductById(String id);
    List<Product> getProductsByMenuCategoryId(String id);
}
