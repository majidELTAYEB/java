package com.example.my_restaurant.repository;

import com.example.my_restaurant.model.Section;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SectionRepository extends JpaRepository<Section, Long> {
    List<Section> findByMenuId(Long menuId);
}
