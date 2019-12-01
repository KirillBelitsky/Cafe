package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.entity.MenuCategory;
import com.bsuir.belitsky.cafe.repository.MenuCategoryRepository;
import com.bsuir.belitsky.cafe.services.MenuCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuCategoryServiceImpl implements MenuCategoryService {

    private MenuCategoryRepository menuCategoryRepository;

    @Autowired
    public MenuCategoryServiceImpl(MenuCategoryRepository menuCategoryRepository) {
        this.menuCategoryRepository = menuCategoryRepository;
    }

    @Override
    public MenuCategory saveMenuCategory(MenuCategory menuCategory) {
        return menuCategoryRepository.save(menuCategory);
    }

    @Override
    public MenuCategory getMenuCategoryByCode(String code) {
        return menuCategoryRepository.getMenuCategoryByCode(code);
    }
}
