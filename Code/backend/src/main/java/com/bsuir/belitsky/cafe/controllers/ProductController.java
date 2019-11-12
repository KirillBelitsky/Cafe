package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.ProductDto;
import com.bsuir.belitsky.cafe.models.Product;
import com.bsuir.belitsky.cafe.services.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/product/")
public class ProductController {

    private ModelMapper modelMapper;
    private ProductService productService;

    public ProductController(ModelMapper modelMapper, ProductService productService) {
        this.modelMapper = modelMapper;
        this.productService = productService;
    }

    @GetMapping("/{id}")
    public ProductDto getProductById(@PathVariable("id") String id) {
        Product product = productService.getProductById(id);
        return product != null ? modelMapper.map(product, ProductDto.class) : null;
    }

    @PostMapping
    public ProductDto saveProduct(@RequestBody ProductDto productDto) {
        if (productDto != null)
            return modelMapper.map(productService.saveProduct(modelMapper.map(productDto, Product.class)), ProductDto.class);
        else return null;
    }

    @GetMapping("/all")
    public List<ProductDto> getAllProducts() {
        return productService.getAllProducts()
                .stream()
                .map(value -> modelMapper.map(value, ProductDto.class))
                .collect(Collectors.toList());
    }
}
