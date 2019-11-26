package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.MenuCategoryDto;
import com.bsuir.belitsky.cafe.entity.MenuCategory;
import com.bsuir.belitsky.cafe.services.MenuCategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/menu_category")
public class MenuCategoryController {

    private MenuCategoryService menuCategoryService;
    private ModelMapper modelMapper;

    @Autowired
    public MenuCategoryController(MenuCategoryService menuCategoryService, ModelMapper modelMapper) {
        this.menuCategoryService = menuCategoryService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public MenuCategoryDto saveMenuCategory(@RequestBody MenuCategoryDto menuCategoryDto) {
        if(menuCategoryDto != null) {
            MenuCategory menuCategory = menuCategoryService.saveMenuCategory(
                    modelMapper.map(menuCategoryDto, MenuCategory.class));
            return menuCategory != null ? modelMapper.map(menuCategory, MenuCategoryDto.class) : null;
        }
        return null;
    }
}
