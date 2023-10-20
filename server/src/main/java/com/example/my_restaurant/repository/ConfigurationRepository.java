package com.example.my_restaurant.repository;

import com.example.my_restaurant.model.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConfigurationRepository extends JpaRepository<Configuration,Long> {
    Optional<Configuration> findByUrlSite(String urlSite);
}
