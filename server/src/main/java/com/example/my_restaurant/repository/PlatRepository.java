package com.example.my_restaurant.repository;

import com.example.my_restaurant.model.Plat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlatRepository extends JpaRepository<Plat, Long> {
    List<Plat> findBySectionId(Long sectionId);

}
