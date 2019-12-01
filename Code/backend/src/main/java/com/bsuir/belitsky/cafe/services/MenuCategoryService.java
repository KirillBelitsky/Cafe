package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.entity.MenuCategory;

public interface MenuCategoryService {
    MenuCategory saveMenuCategory(MenuCategory menuCategory);
    MenuCategory getMenuCategoryByCode(String code);
}
