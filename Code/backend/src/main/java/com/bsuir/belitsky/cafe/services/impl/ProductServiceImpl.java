package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.entity.Product;
import com.bsuir.belitsky.cafe.repository.ProductRepository;
import com.bsuir.belitsky.cafe.services.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product getProductById(String id) {
        return id != null ? productRepository.getProductById(id) : null;
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
