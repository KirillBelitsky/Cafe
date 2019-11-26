package com.bsuir.belitsky.cafe.repository;

import com.bsuir.belitsky.cafe.entity.MenuCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuCategoryRepository extends JpaRepository<MenuCategory, String> {
}
