package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.models.Product;

import java.util.List;

public interface ProductService {
    Product getProductById(String id);
    Product saveProduct(Product product);
    List<Product> getAllProducts();
}
