package com.example.my_restaurant.repository;

import com.example.my_restaurant.model.Restaurant;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant,Long> {

    @EntityGraph(attributePaths = "menus")
    List<Restaurant> findAll();

    Optional<Restaurant> findByConfigurationId(Long configurationId);
}
